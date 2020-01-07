<template>
  <div class="project-card">
    <h1>{{ projectCard.title }}</h1>
    <img :src="fullImageUrl">
    <p>{{ projectCard.bodyText }}</p>
    <a :href="projectCard.githubUrl" target="_blank" rel="noopener noreferrer">Github/kstrckr/{{ projectCard.githubUrlLabel }}</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { ProjectCardModel, IProjectCard } from "../classes/ProjectCardModel"

export default Vue.extend({
  name: 'ProjectCard',
  props: {
    projectCard : {
      type: Object as () => ProjectCardModel,
    }
  },
  computed: {
    fullImageUrl(): string {
      // eslint-disable-next-line no-console
      return '/images/' + this.projectCard.imageUrl;
    },
    githubUrl(): string {
      return 'www.github.com/kstrckr/' + this.projectCard.githubUrl;
    },
  }
})

</script>

<style scoped lang="scss">
  .project-card {
    text-align: center;
    width: 360px;
    // height: 520px;
    margin: 12px 12px;
    background-color: #fff;
    padding: 0px 12px 12px 6px;
  }
</style>