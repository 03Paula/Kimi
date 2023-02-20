

<template>
    <header class="header__index">
        <RouterLink to="/" style="text-decoration: none; color: inherit;" ><img src="../assets/images/logoTienda.png" alt="logo de la tienda Kimi" class="logo" ></RouterLink>
        <router-link to="/login" style="text-decoration: none; color: inherit;" ><h6 class="sesionListado" v-if="!sesion" >Iniciar sesión</h6></router-link>
        <router-link to="/usuario" style="text-decoration: none; color: inherit;" ><h6 class="usuario" v-if="sesion" >{{ usuario }}</h6></router-link>
    </header>
</template>

<script>
/**
 * @file HeaderIndex.vue 
 * @author Paula Flor
 * 
 * @vue-data {Boolean} sesion - Almacena si hay una sesión iniciada o no.
 * @vue-data {String} usuario - Almacena el nombre de usuario.
 */
    export default {
        data() {
            return {
                usuario: "",
                sesion:false
            }
        },
        mounted() {
            if(localStorage.getItem("nombreusu")){
                this.usuario = localStorage.getItem("nombreusu")
                this.sesion = true
            }
        }
    }
</script>
