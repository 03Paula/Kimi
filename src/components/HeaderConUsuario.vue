<script setup>
    import BotonTema from './BotonTema.vue';
</script>


<template>
    <header class="header__index">
        <RouterLink to="/" style="text-decoration: none; color: inherit;" ><img src="../assets/images/logoTienda.png" alt="logo de la tienda Kimi" class="logo" ></RouterLink>
        <router-link to="/usuario" style="text-decoration: none; color: inherit;" ><h6 class="usuario" >Usuario</h6></router-link>
        <BotonTema />
    </header>
</template>