<template>
  <div class="nav">
    <div class="nav-item"
      v-for='navItem in navItems'
      v-bind:key='navItem.name'
      v-on:click='navItem.clicked()'>
      {{ navItem.name }}
    </div>
    
  </div>
</template>

<script lang='ts'>
import Vue from 'vue';

import { NavItem } from '../classes/NavItem';

export default Vue.extend({
  name: 'Nav',
  data: function() {
    return {
      navItems: [
        new NavItem('Home'),
        new NavItem('About'),
      ]
    }
  },
});
</script>

<style scoped lang='scss'>
.nav {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  
}

.nav-item {
  margin: 0px 6px;
  padding: 6px 3px;

  &:hover {
    opacity: 0.5;
  }
}

.router-link-active {
    background-color: blue;
}
</style>