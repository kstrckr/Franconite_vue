<template>
  <div class="home">
    <h1>Collaboratively creating solutions with code.</h1>
    <p>test</p>
    <div class="languages">

    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
  name: 'home',
  components: {
  },
  data: function() {
    return {
      languages: ['']
    }
  }
})
</script>

<style scoped lang="scss">

@import '../assets/styles/globals.scss';

.home {
 & h1 {
   font-weight: normal;
 }
}
</style>