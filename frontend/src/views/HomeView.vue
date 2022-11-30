<script>
import store from "../store";
import {toast} from "bulma-toast"

// onMounted(() => {
//   axios.get('/?name=lee7goal')
//       .then(response => {
//         console.log(response)
//
//       })
//       .catch(error => {
//         console.log(error)
//         $store.state.commit('')
//       })
// })
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
  <main>
<!--    <TheWelcome/>-->
    <p>{{this.$store.state.count}}</p>
    <button @click="increase">Increase</button>
  </main>
</template>
