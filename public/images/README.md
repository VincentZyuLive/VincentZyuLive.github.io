# Public Images Asset Registry

本目录收录 VincentZyuLive 组织下各开源项目在个人主页（[vincentzyulive.github.io](https://vincentzyulive.github.io)）展示所引用的静态图片与动图资源。

为保证资源脉络清晰与版本可追溯，所有图片**按对应仓库名称划分子目录**存放，并保留与各自原始仓库一致的文件名命名。

---

## 📁 目录结构与各图片来源映射表

### 1. `splayer-status-html-overlay-for-obs`

透明毛玻璃音乐歌词挂件，原生兼容 SPlayer-Next 协议，在 OBS 中提供封面、歌曲信息、进度与三行动态滚动歌词。

* **源仓库**：[`VincentZyuLive/splayer-status-html-overlay-for-obs`](https://github.com/VincentZyuLive/splayer-status-html-overlay-for-obs)
* **默认分支**：`main`

| 站点本地相对路径 | 原始仓库内相对路径 | 公网 Raw 访问直链 (HTTPS) | 用途说明 |
| :--- | :--- | :--- | :--- |
| `splayer-status-html-overlay-for-obs/preview.obs.png` | `docs/preview.obs.png` | [Raw Link](https://raw.githubusercontent.com/VincentZyuLive/splayer-status-html-overlay-for-obs/main/docs/preview.obs.png) | OBS 完整直播推流视口实机效果图 |
| `splayer-status-html-overlay-for-obs/preview.overlay-only.png` | `docs/preview.overlay-only.png` | [Raw Link](https://raw.githubusercontent.com/VincentZyuLive/splayer-status-html-overlay-for-obs/main/docs/preview.overlay-only.png) | 仅 HTML 歌词卡片特写展示图 |
| `splayer-status-html-overlay-for-obs/preview.phone.png` | `docs/preview.phone.png` | [Raw Link](https://raw.githubusercontent.com/VincentZyuLive/splayer-status-html-overlay-for-obs/main/docs/preview.phone.png) | B站手机客户端直播观看视角效果图 |
| `splayer-status-html-overlay-for-obs/preview.card.png` | *(卡片缩略裁剪版)* | [Raw Link](https://raw.githubusercontent.com/VincentZyuLive/.github/main/profile/assets/splayer-status-html-overlay.png) | 首页项目卡片封面缩略展示图 |

---

### 2. `go-musicfox-vincentzyu-fork`

基于 `go-musicfox` 的 CLI 播放器 fork，新增 SPlayer-Next 兼容 HTTP/WebSocket API，为 OBS 提供歌曲、封面与歌词实时数据流。

* **源仓库**：[`VincentZyuLive/go-musicfox-vincentzyu-fork`](https://github.com/VincentZyuLive/go-musicfox-vincentzyu-fork)
* **默认分支**：`master`

| 站点本地相对路径 | 原始仓库内相对路径 | 公网 Raw 访问直链 (HTTPS) | 用途说明 |
| :--- | :--- | :--- | :--- |
| `go-musicfox-vincentzyu-fork/preview.obs.html.overlay.png` | `previews/preview.obs.html.overlay.png` | [Raw Link](https://raw.githubusercontent.com/VincentZyuLive/go-musicfox-vincentzyu-fork/master/previews/preview.obs.html.overlay.png) | 终端播放器与 OBS 挂件联动展示效果 |
| `go-musicfox-vincentzyu-fork/preview.card.png` | *(卡片缩略裁剪版)* | [Raw Link](https://raw.githubusercontent.com/VincentZyuLive/.github/main/profile/assets/go-musicfox.png) | 首页项目卡片封面展示图 |

---

### 3. `lazer-plugin-ws-server-bridge`

专为 osu!lazer 游戏客户端打造的外部 WebSocket 状态广播与双向控制插件，原生兼容 SPlayer-Next 规范。

* **源仓库**：[`VincentZyuLive/lazer-plugin-ws-server-bridge`](https://github.com/VincentZyuLive/lazer-plugin-ws-server-bridge)
* **默认分支**：`main`

| 站点本地相对路径 | 原始仓库内相对路径 | 公网 Raw 访问直链 (HTTPS) | 用途说明 |
| :--- | :--- | :--- | :--- |
| `lazer-plugin-ws-server-bridge/preview.card.png` | *(卡片特写 16:10 裁剪版)* | [Raw Link](https://raw.githubusercontent.com/VincentZyuLive/lazer-plugin-ws-server-bridge/main/docs/images/preview/preview.lazer-html-overlay-obs-sync.png) | 首页项目卡片封面：左侧 Lazer 客户端 + 右侧 OBS SPlayer 外部挂件同步实机特写 |
| `lazer-plugin-ws-server-bridge/preview.lazer-html-overlay-obs-sync.png` | `docs/images/preview/preview.lazer-html-overlay-obs-sync.png` | [Raw Link](https://raw.githubusercontent.com/VincentZyuLive/lazer-plugin-ws-server-bridge/main/docs/images/preview/preview.lazer-html-overlay-obs-sync.png) | Lazer 客户端与 OBS 挂件联动实机双屏对比展示完整图 |
| `lazer-plugin-ws-server-bridge/preview.lazer-player.jpg` | *(Lazer 播放器特写)* | [Raw Link](https://raw.githubusercontent.com/VincentZyuLive/lazer-plugin-ws-server-bridge/main/docs/images/preview/preview.lazer-html-overlay-obs-sync.png) | Lazer 播放歌曲 (ラグトレイン) 实机主窗口特写展示 |

---

### 4. `bili-live-danmaku`

B站直播透明弹幕浮层，支持礼物、入场合并、SC、自定义字体与历史弹幕。

* **源仓库**：[`VincentZyuLive/bili-live-danmaku`](https://github.com/VincentZyuLive/bili-live-danmaku)
* **默认分支**：`main`

| 站点本地相对路径 | 原始仓库内相对路径 | 公网 Raw 访问直链 (HTTPS) | 用途说明 |
| :--- | :--- | :--- | :--- |
| `bili-live-danmaku/preview.png` | `docs/images/preview/preview.png` | [Raw Link](https://raw.githubusercontent.com/VincentZyuLive/bili-live-danmaku/main/docs/images/preview/preview.png) | OBS Browser Source 弹幕浮层与历史记录渲染效果 |

---

### 5. `VincentZyu233-OBS-stage`

水色雾蓝主题 OBS 舞台布局背景、前景装饰组件与 OBS WebSocket 控制台。

* **源仓库**：[`VincentZyuLive/VincentZyu233-OBS-stage`](https://github.com/VincentZyuLive/VincentZyu233-OBS-stage)
* **默认分支**：`main`

| 站点本地相对路径 | 原始仓库内相对路径 | 公网 Raw 访问直链 (HTTPS) | 用途说明 |
| :--- | :--- | :--- | :--- |
| `VincentZyu233-OBS-stage/preview.obs.png` | `docs/images/preview.obs.png` | [Raw Link](https://raw.githubusercontent.com/VincentZyuLive/VincentZyu233-OBS-stage/main/docs/images/preview.obs.png) | OBS 完整半屏舞台效果展示 |
| `VincentZyu233-OBS-stage/preview.bili-livehime.png` | `docs/images/preview.bili-livehime.png` | [Raw Link](https://raw.githubusercontent.com/VincentZyuLive/VincentZyu233-OBS-stage/main/docs/images/preview.bili-livehime.png) | B站直播姬场景搭建与图层效果 |
| `VincentZyu233-OBS-stage/preview.stream-only.png` | `docs/images/preview.stream-only.png` | [Raw Link](https://raw.githubusercontent.com/VincentZyuLive/VincentZyu233-OBS-stage/main/docs/images/preview.stream-only.png) | 直播推流纯画面输出效果 |
| `VincentZyu233-OBS-stage/preview.webui.png` | `docs/images/preview.webui.png` | [Raw Link](https://raw.githubusercontent.com/VincentZyuLive/VincentZyu233-OBS-stage/main/docs/images/preview.webui.png) | WebUI 仪表盘控制面板界面 |

---

### 6. `obs-manim-like-motion`

将 Manim 数学动画哲学与 GPU 实时线稿素描带入 OBS Studio 的高质感转场与动效插件 (C++20 / HLSL)。

* **源仓库**：[`VincentZyuLive/obs-manim-like-motion`](https://github.com/VincentZyuLive/obs-manim-like-motion)
* **默认分支**：`main`

| 站点本地相对路径 | 原始仓库内相对路径 | 公网 Raw 访问直链 (HTTPS) | 用途说明 |
| :--- | :--- | :--- | :--- |
| `obs-manim-like-motion/preview.gif` | `docs/media/preview.gif` | [Raw Link](https://raw.githubusercontent.com/VincentZyuLive/obs-manim-like-motion/main/docs/media/preview.gif) | Manim 动态手绘线稿平滑转场动态演示 (GIF) |
