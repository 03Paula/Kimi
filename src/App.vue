<script>
import { RouterLink, RouterView } from 'vue-router'
import Index from './components/Index.vue'

export default {
  name: 'App', 
  components: {
    Index
  }
}
</script>

<template>
  <Index />
</template>

<style>
  @import './assets/css/main.css'
</style>