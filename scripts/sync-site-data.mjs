import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const repositories = [
  "VincentZyuLive/VincentZyu233-OBS-stage",
  "VincentZyuLive/splayer-status-html-overlay-for-obs",
  "VincentZyuLive/go-musicfox-vincentzyu-fork",
  "VincentZyuLive/bili-live-danmaku",
];
const roomId = "5861873";
const topicsPath = fileURLToPath(new URL("../data/github-topics.json", import.meta.url));
const bilibiliPath = fileURLToPath(
  new URL("../data/bilibili-snapshot.json", import.meta.url),
);
const token = process.env.GITHUB_TOKEN?.trim();

async function readJson(path, fallback) {
  try {
    return JSON.parse(await readFile(path, "utf8"));
  } catch {
    return fallback;
  }
}

const existingTopics = await readJson(topicsPath, {});
const existingBilibili = await readJson(bilibiliPath, null);
const githubHeaders = {
  Accept: "application/vnd.github+json",
  "User-Agent": "VincentZyuLive-Pages-Data-Sync",
  "X-GitHub-Api-Version": "2022-11-28",
};
if (token) githubHeaders.Authorization = `Bearer ${token}`;

const topics = {};
let topicFailures = 0;
for (const repository of repositories) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repository}/topics`, {
      headers: githubHeaders,
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();
    if (!Array.isArray(payload.names)) throw new Error("GitHub API 未返回 topics 数组");
    topics[repository] = payload.names;
    console.log(`${repository}: ${payload.names.length} topics`);
  } catch (error) {
    topicFailures += 1;
    topics[repository] = Array.isArray(existingTopics[repository])
      ? existingTopics[repository]
      : [];
    console.warn(
      `${repository}: topic 同步失败，${existingTopics[repository] ? "保留缓存" : "使用空列表"} (${error.message})`,
    );
  }
}

let bilibili;
try {
  const response = await fetch(
    `https://api.live.bilibili.com/room/v1/Room/get_info?room_id=${roomId}`,
    {
      headers: {
        "User-Agent": "Mozilla/5.0 VincentZyuLive-Pages-Data-Sync",
        Referer: `https://live.bilibili.com/${roomId}`,
      },
    },
  );
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const payload = await response.json();
  if (payload.code !== 0 || !payload.data) {
    throw new Error(payload.message || payload.msg || "B站接口返回错误");
  }
  const data = payload.data;
  const fetchedAt = new Date().toISOString();
  bilibili = {
    roomId: String(data.room_id || roomId),
    uid: Number(data.uid || 0),
    liveStatus: Number(data.live_status || 0),
    title: String(data.title || ""),
    areaName: [data.parent_area_name, data.area_name].filter(Boolean).join(" · "),
    online: Number(data.online || 0),
    followers: Number(data.attention || 0),
    liveTime: String(data.live_time || ""),
    fetchedAt,
    checkedAt: fetchedAt,
    stale: false,
    error: null,
  };
  console.log(`Bilibili room ${bilibili.roomId}: liveStatus=${bilibili.liveStatus}`);
} catch (error) {
  const checkedAt = new Date().toISOString();
  bilibili = existingBilibili
    ? {
        ...existingBilibili,
        checkedAt,
        stale: true,
        error: String(error.message),
      }
    : {
        roomId,
        uid: 0,
        liveStatus: -1,
        title: "",
        areaName: "",
        online: 0,
        followers: 0,
        liveTime: "",
        fetchedAt: null,
        checkedAt,
        stale: true,
        error: String(error.message),
      };
  console.warn(`B站快照同步失败，${existingBilibili ? "保留上次成功数据" : "使用空快照"} (${error.message})`);
}

await writeFile(topicsPath, `${JSON.stringify(topics, null, 2)}\n`, "utf8");
await writeFile(bilibiliPath, `${JSON.stringify(bilibili, null, 2)}\n`, "utf8");
console.log(`data snapshots written`);
if (topicFailures) console.warn(`${topicFailures} 个 GitHub topic 同步失败；已使用缓存继续。`);
