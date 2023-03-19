<script setup lang="ts">
import Start from './components/Start.vue';
import Skills from './components/Skills.vue';
import Experience from './components/Experience.vue';
import Educatuion from './components/Education.vue';
import Contacts from './components/Contacts.vue';
import { ref } from 'vue';
import { Step } from './data';

const step = ref(Step.Expirience)

</script>

<template>
  <div class="container">
    <Start v-if="step === Step.Start" class="snap"></Start>
    <Skills v-if="step === Step.Skills" class="snap"></Skills>
    <Experience v-if="step === Step.Expirience" class="snap"></Experience>
    <Educatuion v-if="step === Step.Education" class="snap"></Educatuion>
    <Contacts v-if="step === Step.Contacts" class="snap"></Contacts>
  </div>
</template>

<style lang="scss">
* {
  overscroll-behavior: none;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

*::-webkit-scrollbar {
    display: none;
    /* for Chrome, Safari, and Opera */
}
</style>
