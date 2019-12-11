<template>
  <div class="project-card">
    <h1>{{projectCard.title}}</h1>
    <img src="../assets/images/sales_vs_vol_vs_pop.png">
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
  }
})

</script>

<style scoped lang="scss">
  .project-card {
    width: 360px;
    height: 520px;
    background-color: #fff;
  }
</style>