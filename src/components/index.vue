<script setup>
    import HeaderIndex from './HeaderIndex.vue';
    import FooterInicio from './FooterInicio.vue';
    import BtnGrande from './BtnGrande.vue';
</script>

<template>
    <HeaderIndex />
    <body class="index">
        <h1 class="titulo" >Kimi</h1>
        <h3>La mejor tienda para comprar mangas y figuras</h3>
        <RouterLink to="/listado" style="text-decoration: none; color: inherit;" ><BtnGrande /></RouterLink>
    </body>
    <FooterInicio />
</template>