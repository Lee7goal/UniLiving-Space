<template>
  <h1 class="title">Home Page</h1>

  <router-link :to="{'name': 'AboutView'}">About</router-link>
  <button class="button is-primary is-light" @click="getInfo">测试</button>
</template>

<script>
import {toast} from 'bulma-toast'
import axios from "axios";

export default {
  name: "HomeView",
  mounted() {
    // console.log(this.$store)
  },
  methods: {

    async getInfo() {
      // this.store.state.isLoading = true
      console.log(store)

      // axios
      //     .get()
      //     .then()
      //     .catch()
    }
  }
}
</script>

<style scoped>

</style>