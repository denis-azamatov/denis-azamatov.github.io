<script setup lang="ts">
import Start from './components/Start.vue';
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import Educatuion from './components/Education.vue';
import Contacts from './components/Contacts.vue';

</script>

<template>
  <div class="container">
    <Start class="snap"></Start>
    <Skills class="snap"></Skills>
    <Experience class="snap"></Experience>
    <Educatuion class="snap"></Educatuion>
    <Contacts class="snap"></Contacts>
  </div>
</template>

<style scoped lang="scss">
.container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
}
</style>
