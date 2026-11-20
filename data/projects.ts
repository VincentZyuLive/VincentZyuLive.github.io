import type { ProjectCardData } from "./types";
import githubTopicsJson from "./github-topics.json";

const githubTopics = githubTopicsJson as Record<string, string[]>;

export const projects: ProjectCardData[] = [
  {
    name: "SPlayer OBS HTML Overlay",
    version: "0.1.0",
    description: "透明毛玻璃音乐歌词挂件，通过 SPlayer-Next 兼容 API 在 OBS 中展示封面、歌曲信息、进度与三行歌词。",
    repo: "https://github.com/VincentZyuLive/splayer-status-html-overlay-for-obs",
    preview: "https://raw.githubusercontent.com/VincentZyuLive/.github/main/profile/assets/splayer-status-html-overlay.png",
    previewFallback: "/images/preview.splayer-obs-html-overlay.card.png",
    previewFocus: "left",
    accent: "#A7C8FF",
    topics: githubTopics["VincentZyuLive/splayer-status-html-overlay-for-obs"] ?? [],
  },
  {
    name: "go-musicfox (VincentZyu Fork)",
    version: "5.1.0-fork",
    description: "基于 go-musicfox 的 CLI 播放器 fork，新增 SPlayer-Next 兼容 HTTP/WebSocket API，为 OBS 提供歌曲、封面与歌词数据。",
    repo: "https://github.com/VincentZyuLive/go-musicfox-vincentzyu-fork",
    preview: "https://raw.githubusercontent.com/VincentZyuLive/.github/main/profile/assets/go-musicfox.png",
    previewFallback: "/images/preview.musicfox.card.png",
    previewFocus: "right",
    accent: "#E36229",
    topics: githubTopics["VincentZyuLive/go-musicfox-vincentzyu-fork"] ?? [],
  },
  {
    name: "Lazer WS Server Bridge",
    version: "0.1.0",
    description: "为 osu!lazer 游戏客户端提供实时谱面状态数据同步与 WebSocket 桥接的脚本插件。",
    repo: "https://github.com/VincentZyuLive/lazer-plugin-ws-server-bridge",
    preview: "https://raw.githubusercontent.com/VincentZyuLive/.github/main/profile/assets/lazer-bridge-preview.png",
    previewFallback: "/images/lazer-bridge.png",
    previewFocus: "center",
    accent: "#FF66AA",
    topics: githubTopics["VincentZyuLive/lazer-plugin-ws-server-bridge"] ?? ["osu", "lazer", "websocket", "lua"],
  },
  {
    name: "Bili Live Danmaku",
    version: "0.1.0",
    description: "透明 B站弹幕面板，支持礼物、入场、SC、历史、自定义字体与 Cookie 助手。",
    repo: "https://github.com/VincentZyuLive/bili-live-danmaku",
    preview: "https://raw.githubusercontent.com/VincentZyuLive/.github/main/profile/assets/bili-live-danmaku.png",
    previewFallback: "/images/preview.bili-live-danmaku.png",
    previewFocus: "bottom",
    accent: "#F4C6D7",
    topics: githubTopics["VincentZyuLive/bili-live-danmaku"] ?? [],
  },
  {
    name: "OBS Stage",
    version: "0.1.0",
    description: "可编辑的水色雾蓝舞台背景、前景装饰与 OBS WebSocket 管理工具。",
    repo: "https://github.com/VincentZyuLive/VincentZyu233-OBS-stage",
    preview: "https://raw.githubusercontent.com/VincentZyuLive/.github/main/profile/assets/obs-stage.png",
    previewFallback: "/images/preview.obs-stage.png",
    previewFocus: "bottom-right",
    accent: "#7FA8E8",
    topics: githubTopics["VincentZyuLive/VincentZyu233-OBS-stage"] ?? [],
  },
  {
    name: "Manim Motion Transition",
    version: "0.3.0",
    description: "将 Manim 数学动画哲学与 GPU 实时线稿素描带入 OBS Studio 的高质感转场与手绘动效插件。",
    repo: "https://github.com/VincentZyuLive/obs-manim-like-motion",
    preview: "https://raw.githubusercontent.com/VincentZyuLive/.github/main/profile/assets/obs-manim-motion.gif",
    previewFallback: "https://raw.githubusercontent.com/VincentZyuLive/.github/main/profile/assets/obs-manim-motion.gif",
    previewFocus: "center",
    accent: "#7FA8E8",
    topics: githubTopics["VincentZyuLive/obs-manim-like-motion"] ?? ["obs-plugin", "obs-transition", "manim", "shader"],
  },
];

export const liveRoom = {
  platform: "Bilibili Live",
  roomId: "5861873",
  url: "https://live.bilibili.com/5861873",
  badge:
    "https://img.shields.io/badge/Bilibili-5861873-00A1D6?style=for-the-badge&logo=bilibili&logoColor=white",
};
