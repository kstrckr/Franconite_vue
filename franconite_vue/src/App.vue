<template>
  <div id="app">
    <div id="top-bar">
      <Header />
      <Nav />
    </div>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

import Header from '@/components/Header.vue';
import Nav from '@/components/Nav.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Header,
    Nav,
  }
})

</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Montserrat|Playfair+Display&display=swap');

@import './assets/styles/globals.scss';

// font-family: 'Playfair Display', serif;

// font-family: 'Montserrat', sans-serif;

html {
  height: 100%;
} 

body {
  min-height: 100%;
  margin: 0;
  padding: 0;

  background-color: $base-biege;
}

#app {
  font-family: 'Playfair Display', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark-mono;

  a {
      text-decoration: none;
      color: $dark-mono;

      &:hover {
        opacity: 0.5;
      }

      &:active {
      opacity: 1;
      color: black;
      }
  }
  
   p {
    text-indent: 32px;
  }

  h1 {
    font-weight: normal;
  }
  
  & #top-bar {
  padding: 16px;
  box-shadow: 0px 3px 12px 1px rgba(0,0,0,.25);
  }

  & #content {
    font-family: 'Montserrat', sans-serif;
    margin: 48px 0 0 0;
    padding: 0 24px;
  }
}
</style>
