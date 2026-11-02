# 🌊 VincentZyuLive Pages

VincentZyuLive 的直播环境、OBS 舞台与项目展示站。

- 线上地址：<https://vincentzyulive.github.io/>
- 本地开发：`npm run docs:dev`
- 本地端口：`16162`
- 构建：`npm run docs:build`
- 数据同步：`npm run sync:site-data`

站点每小时通过 GitHub Actions 刷新 B站公开直播间快照和 GitHub topics。

## 数据来源

- 直播间快照：B站公开接口 `api.live.bilibili.com/room/v1/Room/get_info`
- GitHub topics：GitHub REST API
- 接口字段参考：[SocialSisterYi/bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect)

`bilibili-API-collect` 使用 CC BY-NC 4.0；本仓库仅参考其接口说明，不复制其文档内容。
