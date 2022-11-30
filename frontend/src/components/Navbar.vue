<template>
    <nav class="navbar is-light">

      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <p class="subtitle"><strong>UniLiving Space</strong> 他乡寓</p>
        </a>
        <p class="navbar-item"></p>
      </div>



      <div class="navbar-end">

        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>发布房源</strong>
            </a>
          </div>
        </div>

        <RouterLink :to="{'name': 'HomeView'}" class="navbar-item">
          <strong>租房</strong>
        </RouterLink>



        <RouterLink :to="{'name': 'AboutView'}" class="navbar-item">
          <strong>登录</strong>
        </RouterLink>

        <RouterLink :to="{'name': 'HelpView'}" class="navbar-item">
          <strong>帮助</strong>
        </RouterLink>

        <div class="navbar-item">
          <div class="content is-small">
            <p class="is-small"><strong>国内专线</strong></p>
            <p class="is-small"><strong>+86 400 920 0606</strong></p>
          </div>

        </div>


      </div>
    </nav>


  
</template>

<script>
import {RouterLink} from "vue-router";


export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>