<script setup>
    import headerConUsuario from './HeaderConUsuario.vue';
</script>

<template>
    <headerConUsuario />
    <body>
        <input name="busqueda" id="busqueda" class="barraBusqueda" />
        <button class="btn__busqueda"><img src="../assets/images/busqueda.png" alt="icono de lupa"/></button>
    </body>
</template>