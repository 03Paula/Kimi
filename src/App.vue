<script>
import { RouterLink, RouterView } from 'vue-router'
import Contacto from './components/Contacto.vue'

export default {
  name: 'App', 
  components: {
    Contacto
  }
}
</script>

<template>
  <Contacto />
</template>

<style>
  @import './assets/css/main.css';
</style>