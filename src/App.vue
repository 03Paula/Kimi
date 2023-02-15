<script>
import { RouterLink, RouterView } from 'vue-router'
import Login from './components/Login.vue'

export default {
  name: 'App', 
  components: {
    Login
  }
}
</script>

<template>
  <RouterView></RouterView>
</template>

<style>
  @import './assets/css/main.css';
</style>