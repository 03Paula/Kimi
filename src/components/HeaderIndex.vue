<script setup>
    import BotonTema from './BotonTema.vue';
</script>

<template>
    <header class="header__index">
        <RouterLink to="/" ><img src="../assets/images/logoTienda.png" alt="logo de la tienda Kimi" class="logo" ></RouterLink>
        <RouterLink to="/login" > <img class="header__icono" src="../assets/images/avatar.png" alt="icono de usuario" /></RouterLink>
        <RouterLink to="/login" ><h6>Iniciar sesión</h6></RouterLink>
        <BotonTema />
    </header>
</template>
