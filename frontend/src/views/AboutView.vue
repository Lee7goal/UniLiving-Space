<template>
  <div class="container">
    <h1 class="title">This store num: {{$store.state.name}}</h1>
  </div>
</template>

<script>

export default {
  name: 'AboutView',
  mounted() {
    console.log(this.$store)
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
