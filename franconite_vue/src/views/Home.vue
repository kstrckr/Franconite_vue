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

      <!-- <div class="project-card">
        <h1>Python Data</h1>
        <img src="../assets/images/sales_vs_vol_vs_pop.png">
        <p>Database design, seeding, and database analysis of Iowa state Liquor Sales using Anaconda and Bokeh.</p>
        <a href="https://github.com/kstrckr/python_data_project">Github/Python_Data</a>
      </div>
      
      <div class="project-card">
        <h1>Heat Pype</h1>
        <img src="../assets/images/MoonHR300-ditherlicious.png">
        <p>A Python utility with a tkinter UI for formatting and printing images via serial on thermal receipt printers.</p>
        <a href="https://github.com/kstrckr/Heat_Pype">Github/Heat_Pype</a>
      </div>

      <div class="project-card">
        <h1>Mean Match Master</h1>
        <img src="../assets/images/match_master_preview.png">
        <p>A memory game built using the MEAN stack, persistant high scores, server side gameplay logic, and a ridiculously awesome font.</p>
        <a href="https://github.com/kstrckr/MEAN-Match-Master">Github/MEAN_Match_Master</a>
      </div>

      <div class="project-card">
        <h1>Commageddon</h1>
        <img src="../assets/images/eod_py.png">
        <p>An end of day asset verification script developed for Saks photo studios. It generates expected file names based on an asset tracking CSV file and checks the local directory to eliminate manual naming errors.</p>
        <a href="https://github.com/kstrckr/commageddon">Github/Commageddon</a>
      </div> -->

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