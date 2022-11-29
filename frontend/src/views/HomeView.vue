<script>
import TheWelcome from '../components/TheWelcome.vue'
import axios from "axios";
import store from "../store";

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
  data() {
    return {
      count: 0
    }
  },
  components: [TheWelcome],
  mounted() {
    this.getCount();
  },
  methods: {
    getCount() {
      this.count = store.state.count;
    },
    increase() {
      store.commit('increaseCount')
      this.getCount();
      console.log(this.count)
    }
  }
}
</script>

<template>
  <main>
<!--    <TheWelcome/>-->
    <p>{{this.count}}</p>
    <button @click="increase">Increase</button>
  </main>
</template>
