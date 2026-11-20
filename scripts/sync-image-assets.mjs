import { readdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative } from "node:path";

const rootDir = fileURLToPath(new URL("..", import.meta.url));
const imagesDir = join(rootDir, "public", "images");
const readmePath = join(imagesDir, "README.md");

/**
 * 仓库静态资源映射注册表
 */
export const assetRegistry = [
  {
    repo: "VincentZyuLive/splayer-status-html-overlay-for-obs",
    branch: "main",
    title: "splayer-status-html-overlay-for-obs",
    description: "透明毛玻璃音乐歌词挂件，原生兼容 SPlayer-Next 协议，在 OBS 中提供封面、歌曲信息、进度与三行动态滚动歌词。",
    images: [
      {
        file: "preview.card.gif",
        originPath: "docs/images/preview/preview.overlay-only.gif (16:10 录制动态演示)",
        customRawUrl: "https://raw.githubusercontent.com/VincentZyuLive/splayer-status-html-overlay-for-obs/main/docs/images/preview/preview.overlay-only.gif",
        description: "首页项目卡片封面：SPlayer 透明歌词挂件 16:10 实机动态演示",
      },
      {
        file: "preview.overlay-only.gif",
        originPath: "docs/images/preview/preview.overlay-only.gif",
        description: "独立透明歌词挂件实机录制动图",
      },
      {
        file: "preview.obs.png",
        originPath: "docs/images/preview/preview.obs.png",
        description: "OBS 完整直播推流视口实机效果图",
      },
      {
        file: "preview.overlay-only.png",
        originPath: "docs/images/preview/preview.overlay-only.png",
        description: "仅 HTML 歌词卡片特写展示静态图",
      },
      {
        file: "preview.phone.png",
        originPath: "docs/images/preview/preview.phone.png",
        description: "B站手机客户端直播观看视角效果图",
      },
      {
        file: "preview.card.png",
        originPath: "profile/assets/splayer-status-html-overlay.png (Profile 组织库)",
        customRawUrl: "https://raw.githubusercontent.com/VincentZyuLive/.github/main/profile/assets/splayer-status-html-overlay.png",
        description: "首页项目卡片封面缩略展示静态图",
      },
    ],
  },
  {
    repo: "VincentZyuLive/go-musicfox-vincentzyu-fork",
    branch: "master",
    title: "go-musicfox-vincentzyu-fork",
    description: "基于 go-musicfox 的 CLI 播放器 fork，新增 SPlayer-Next 兼容 HTTP/WebSocket API，为 OBS 提供歌曲、封面与歌词实时数据流。",
    images: [
      {
        file: "preview.obs.html.overlay.png",
        originPath: "previews/preview.obs.html.overlay.png",
        description: "终端播放器与 OBS 挂件联动展示效果",
      },
      {
        file: "preview.card.png",
        originPath: "profile/assets/go-musicfox.png (Profile 组织库)",
        customRawUrl: "https://raw.githubusercontent.com/VincentZyuLive/.github/main/profile/assets/go-musicfox.png",
        description: "首页项目卡片封面展示图",
      },
    ],
  },
  {
    repo: "VincentZyuLive/lazer-plugin-ws-server-bridge",
    branch: "main",
    title: "lazer-plugin-ws-server-bridge",
    description: "专为 osu!lazer 游戏客户端打造的外部 WebSocket 状态广播与双向控制插件，原生兼容 SPlayer-Next 规范。",
    images: [
      {
        file: "preview.card.png",
        originPath: "docs/images/preview/preview.lazer-html-overlay-obs-sync.png (特写 16:10 裁剪)",
        customRawUrl: "https://raw.githubusercontent.com/VincentZyuLive/lazer-plugin-ws-server-bridge/main/docs/images/preview/preview.lazer-html-overlay-obs-sync.png",
        description: "首页项目卡片封面：左侧 Lazer 客户端 + 右侧 OBS SPlayer 外部挂件同步实机特写",
      },
      {
        file: "preview.lazer-html-overlay-obs-sync.png",
        originPath: "docs/images/preview/preview.lazer-html-overlay-obs-sync.png",
        description: "Lazer 客户端与 OBS 挂件联动实机双屏对比展示完整图",
      },
      {
        file: "preview.lazer-player.jpg",
        originPath: "docs/images/preview/preview.lazer-html-overlay-obs-sync.png (播放器主视口)",
        customRawUrl: "https://raw.githubusercontent.com/VincentZyuLive/lazer-plugin-ws-server-bridge/main/docs/images/preview/preview.lazer-html-overlay-obs-sync.png",
        description: "Lazer 播放歌曲 (ラグトレイン) 实机主窗口特写展示",
      },
    ],
  },
  {
    repo: "VincentZyuLive/bili-live-danmaku",
    branch: "main",
    title: "bili-live-danmaku",
    description: "B站直播透明弹幕浮层，支持礼物、入场合并、SC、自定义字体与历史弹幕。",
    images: [
      {
        file: "preview.png",
        originPath: "docs/images/preview/preview.png",
        description: "OBS Browser Source 弹幕浮层与历史记录渲染效果",
      },
    ],
  },
  {
    repo: "VincentZyuLive/VincentZyu233-OBS-stage",
    branch: "main",
    title: "VincentZyu233-OBS-stage",
    description: "水色雾蓝主题 OBS 舞台布局背景、前景装饰组件与 OBS WebSocket 控制台。",
    images: [
      {
        file: "preview.obs.png",
        originPath: "docs/images/preview/preview.obs.png",
        description: "OBS 完整半屏舞台效果展示",
      },
      {
        file: "preview.bili-livehime.png",
        originPath: "docs/images/preview/preview.bili-livehime.png",
        description: "B站直播姬场景搭建与图层效果",
      },
      {
        file: "preview.stream-only.png",
        originPath: "docs/images/preview/preview.stream-only.png",
        description: "直播推流纯画面输出效果",
      },
      {
        file: "preview.webui.png",
        originPath: "docs/images/preview/preview.webui.png",
        description: "WebUI 仪表盘控制面板界面",
      },
    ],
  },
  {
    repo: "VincentZyuLive/obs-manim-like-motion",
    branch: "main",
    title: "obs-manim-like-motion",
    description: "将 Manim 数学动画哲学与 GPU 实时线稿素描带入 OBS Studio 的高质感转场与动效插件 (C++20 / HLSL)。",
    images: [
      {
        file: "preview.gif",
        originPath: "docs/media/preview.gif",
        description: "Manim 动态手绘线稿平滑转场动态演示 (GIF)",
      },
    ],
  },
];

function generateMarkdown() {
  const lines = [
    "# Public Images Asset Registry",
    "",
    "本目录收录 VincentZyuLive 组织下各开源项目在个人主页（[vincentzyulive.github.io](https://vincentzyulive.github.io)）展示所引用的静态图片与动图资源。",
    "",
    "为保证资源脉络清晰与版本可追溯，所有图片**按对应仓库名称划分子目录**存放，并保留与各自原始仓库一致的文件名命名。",
    "",
    "> 💡 **维护脚本说明**：本文件由 `npm run sync:images`（`scripts/sync-image-assets.mjs`）自动生成并校验。如有图片新增或路径调整，请更新该脚本并重新执行。",
    "",
    "---",
    "",
    "## 📁 目录结构与各图片来源映射表",
    "",
  ];

  assetRegistry.forEach((group, idx) => {
    lines.push(`### ${idx + 1}. \`${group.title}\``);
    lines.push("");
    lines.push(group.description);
    lines.push("");
    lines.push(`* **源仓库**：[\`${group.repo}\`](https://github.com/${group.repo})`);
    lines.push(`* **默认分支**：\`${group.branch}\``);
    lines.push("");
    lines.push("| 站点本地相对路径 | 原始仓库内相对路径 | 公网 Raw 访问直链 (HTTPS) | 用途说明 |");
    lines.push("| :--- | :--- | :--- | :--- |");

    group.images.forEach((img) => {
      const localRel = `${group.title}/${img.file}`;
      const rawUrl =
        img.customRawUrl ||
        `https://raw.githubusercontent.com/${group.repo}/${group.branch}/${img.originPath}`;
      lines.push(
        `| \`${localRel}\` | \`${img.originPath}\` | [Raw Link](${rawUrl}) | ${img.description} |`,
      );
    });

    lines.push("");
    lines.push("---");
    lines.push("");
  });

  return lines.join("\n").trimEnd() + "\n";
}

async function validateAndSync() {
  console.log("🔍 Checking image assets in:", imagesDir);
  let missingCount = 0;
  let totalCount = 0;

  for (const group of assetRegistry) {
    const groupDir = join(imagesDir, group.title);
    if (!existsSync(groupDir)) {
      console.warn(`⚠️ Missing repo folder: ${group.title}`);
      missingCount += group.images.length;
      continue;
    }
    for (const img of group.images) {
      totalCount += 1;
      const filePath = join(groupDir, img.file);
      if (!existsSync(filePath)) {
        console.error(`❌ Missing asset file: ${group.title}/${img.file}`);
        missingCount += 1;
      } else {
        console.log(`✅ Found: ${group.title}/${img.file}`);
      }
    }
  }

  // 检查是否有未收录的非合规孤立文件
  const rootEntries = await readdir(imagesDir, { withFileTypes: true });
  for (const entry of rootEntries) {
    if (entry.isFile() && entry.name !== "README.md" && entry.name !== ".DS_Store") {
      console.warn(`⚠️ Warning: Found unclassified file in public/images root: ${entry.name}`);
    }
  }

  const markdown = generateMarkdown();
  await writeFile(readmePath, markdown, "utf8");
  console.log(`\n📝 Successfully generated: public/images/README.md (${totalCount} assets tracked)`);

  if (missingCount > 0) {
    console.error(`\n❌ Validation finished with ${missingCount} missing file(s).`);
    process.exitCode = 1;
  } else {
    console.log("✨ All tracked image assets validated successfully!");
  }
}

validateAndSync();
