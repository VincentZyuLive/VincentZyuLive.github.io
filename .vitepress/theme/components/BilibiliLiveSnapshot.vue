<script setup lang="ts">
import { computed } from "vue";
import snapshot from "../../../data/bilibili-snapshot.json";

const props = defineProps<{ compact?: boolean }>();

const statusText = computed(() => {
  if (snapshot.liveStatus === 1) return "直播中";
  if (snapshot.liveStatus === 2) return "轮播中";
  if (snapshot.liveStatus === 0) return "未开播";
  return "数据不可用";
});
const statusClass = computed(() => {
  if (snapshot.stale) return "stale";
  if (snapshot.liveStatus === 1) return "live";
  if (snapshot.liveStatus === 2) return "replay";
  return "offline";
});
const liveUrl = computed(() => `https://live.bilibili.com/${snapshot.roomId}`);
const checkedAt = computed(() => {
  if (!snapshot.checkedAt) return "尚未同步";
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date(snapshot.checkedAt));
});
const compactNumber = (value: number) =>
  new Intl.NumberFormat("zh-CN", { notation: "compact", maximumFractionDigits: 1 }).format(value);
</script>

<template>
  <article class="bili-live-snapshot" :class="{ compact: props.compact }">
    <div class="bili-live-snapshot-head">
      <span class="bili-live-state" :class="statusClass">{{ statusText }}</span>
      <span class="bili-live-room">ROOM {{ snapshot.roomId }}</span>
    </div>
    <h3>
      <a :href="liveUrl" target="_blank" rel="noopener noreferrer">
        {{ snapshot.title || "VincentZyu 的 B站直播间" }}
      </a>
    </h3>
    <div class="bili-live-metrics">
      <span>分区 <strong>{{ snapshot.areaName || "--" }}</strong></span>
      <span>人气 <strong>{{ snapshot.liveStatus === 1 ? compactNumber(snapshot.online) : "--" }}</strong></span>
      <span>粉丝 <strong>{{ compactNumber(snapshot.followers) }}</strong></span>
    </div>
    <p class="bili-live-sync">
      数据快照 · {{ checkedAt }}
      <span v-if="snapshot.stale"> · 同步失败，使用上次数据</span>
    </p>
  </article>
</template>
