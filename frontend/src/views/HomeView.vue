<script>
import store from "../store";
import {toast} from "bulma-toast"
import banner from "../assets/banner.jpg"

export default {
  name: 'HomeView',
  methods: {
    increase() {
      store.commit('increaseCount')

      toast({
        message: "You Add 1 to Count!",
        type: "is-success"
      })
    }
  }
}
</script>

<template>
  <img src="@/assets/banner.jpg" alt="" id="banner">
  <div class="container">
    <h1 class="title">欢迎来到他乡遇</h1>
  </div>



</template>

<style lang="scss">
#banner {
  //background-size: cover;
  background: url("../assets/banner.jpg") no-repeat center center;
}
</style>
