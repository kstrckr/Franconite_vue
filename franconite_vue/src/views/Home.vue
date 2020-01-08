<template>
  <div class="home">
    <h1>Collaboratively creating solutions with code.</h1>
    <p>{{ bodyText.p1 }}</p>
    <p>{{ bodyText.p2 }}</p>
    <div class="project-cards">
      <ProjectCard
      v-for="project in projects"
      v-bind:key = project.name
      :projectCard="project"/>

  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { BodyText, IBodyText } from '../classes/BodyText';
import { fetchPosts } from '../utils/fetchUtils';
import ProjectCard from '../components/ProjectCard.vue';
import { IProjectCard, ProjectCardModel } from '../classes/ProjectCardModel';


export default Vue.extend({
  name: 'home',
  components: {
    ProjectCard,
  },
  data: function() {
    return {
      languages: [''],
      bodyText: BodyText as IBodyText,
      projects: [] as IProjectCard[],
    }
  },
  methods: {
    convertProjectJsonToProjectCardArray(projects: ProjectCardModel[]): IProjectCard[] {
      const projectArray: ProjectCardModel[] = [];
      projects.forEach( (project: ProjectCardModel) => {
        projectArray.push(project);
      })
      return projectArray;
    },
  },
  created() {
    fetchPosts()
      .then( (resJson) => {
        this.projects = this.convertProjectJsonToProjectCardArray(resJson as IProjectCard[])
      });
  }
})
</script>

<style scoped lang="scss">

@import '../assets/styles/globals.scss';

.home {
  .project-cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 60px 0;
  }

  .project-card {
    text-align: center;
    width: 360px;
    // height: 520px;
    margin: 12px 12px;
    background-color: #fff;
    padding: 0px 12px 12px 6px;
  }
}
</style>