<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Navbar from "./components/Navbar.vue";

</script>

<template>
  <div>
    <Navbar />

    <section class="hero">
      <RouterView/>

    </section>
  </div>


</template>

<style lang="scss">


</style>
