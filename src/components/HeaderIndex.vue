

<template>
    <header class="header__index">
        <RouterLink to="/" ><img src="../assets/images/logoTienda.png" alt="logo de la tienda Kimi" class="logo" ></RouterLink>
        <RouterLink to="/login" style="text-decoration: none; color: inherit;" > <img class="header__icono" src="../assets/images/avatar.png" alt="icono de usuario" v-if="!sesion" /></RouterLink>
        <router-link to="/login" style="text-decoration: none; color: inherit;" ><h6 class="sesion" v-if="!sesion" >Iniciar sesión</h6></router-link>
    </header>
</template>

<script>
    export default {
        data(){
            return{
                sesion:false,
            }
        },
        mounted(){
            if(localStorage.getItem("usuario")){
                this.sesion = true;
            }
        }
    }
</script>
