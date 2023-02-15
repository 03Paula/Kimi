<script setup>
    import BotonTema from './BotonTema.vue';
</script>


<template>
    <header class="header__index">
        <RouterLink to="/" ><img src="../assets/images/logoTienda.png" alt="logo de la tienda Kimi" class="logo" ></RouterLink>
        <RouterLink to="/login" style="text-decoration: none; color: inherit;" > <img class="header__icono" src="../assets/images/avatar.png" alt="icono de usuario" /></RouterLink>
        <router-link to="/login" style="text-decoration: none; color: inherit;" ><h6 class="sesion" >Iniciar sesión</h6></router-link>
        <BotonTema />
    </header>
</template>
