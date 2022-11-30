<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue";

</script>

<template>
    <Navbar />

  <section>
      <RouterView />

  </section>


</template>

<style scoped>

</style>
