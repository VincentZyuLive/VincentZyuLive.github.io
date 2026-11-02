<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vitepress";
import type { ProjectCardData } from "../../../data/types.ts";

const props = defineProps<{ project: ProjectCardData }>();

const visibleTopics = computed(() => props.project.topics.slice(0, 10));
const extraTopicCount = computed(() => Math.max(0, props.project.topics.length - visibleTopics.value.length));
const allTopics = computed(() => props.project.topics.join(" · "));

function resolvePreview(source: string) {
  return /^https?:\/\//i.test(source) ? source : withBase(source);
}

function handlePreviewError(event: Event) {
  const image = event.currentTarget as HTMLImageElement;
  const fallback = props.project.previewFallback;
  if (!fallback || image.dataset.fallbackApplied === "true") return;
  image.dataset.fallbackApplied = "true";
  image.src = withBase(fallback);
}
</script>

<template>
  <article class="project-card" :style="{ '--project-accent': props.project.accent }">
    <div class="project-card-preview" :data-focus="props.project.previewFocus ?? 'center'">
      <img
        :src="resolvePreview(props.project.preview)"
        :alt="`${props.project.name} 预览`"
        loading="lazy"
        @error="handlePreviewError"
      />
    </div>
    <div class="project-card-body">
      <div class="project-card-head">
        <h3>{{ props.project.name }}</h3>
        <code class="project-version">v{{ props.project.version }}</code>
      </div>
      <p>{{ props.project.description }}</p>
      <div class="project-tags" :title="allTopics">
        <span v-for="topic in visibleTopics" :key="topic">{{ topic }}</span>
        <span v-if="extraTopicCount > 0" class="project-tag-more" :title="allTopics">+{{ extraTopicCount }}</span>
      </div>
      <a class="project-repo-link" :href="props.project.repo" target="_blank" rel="noopener noreferrer">查看 GitHub 仓库 →</a>
    </div>
  </article>
</template>
