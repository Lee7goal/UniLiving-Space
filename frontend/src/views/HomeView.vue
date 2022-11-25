<template>
  <h1 class="title">Home Page</h1>
</template>

<script>
import {toast} from 'bulma-toast'

export default {
  name: "HomeView",
  mounted() {
    toast({
      message: 'Welcome to the Home',
      type: 'is-success',
      duration: 3000,
      closeOnClick: true,
      position: "bottom-center"
    })
  }
}
</script>

<style scoped>

</style>