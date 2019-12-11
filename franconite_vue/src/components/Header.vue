<template>
  <div class="header-container">
    <div class="nametag">
      <h1>Kurt Strecker</h1>
    </div>
    <div class="contact">
      <h2>502-468-7387</h2>
      <a class="mail-link" href="mailto:kurt@kurtstrecker.io">kurt@kurtstrecker.io</a>
    </div>
    
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
});
</script>

<style scoped lang='scss'>

@import '../assets/styles/globals.scss';

  .header-container {

    display: flex;
    justify-content: space-between;

    // padding: 32px 16px;

    a {
      text-decoration: none;
      color: $dark-mono;
    }

    h1, h2 {
      font-weight: normal;
      margin: 0;
      padding: 0;
    }

    .mail-link:hover {
      opacity: 0.5;
    }

    .mail-link:active {
      opacity: 1;
      color: black;
    }
  }
</style>