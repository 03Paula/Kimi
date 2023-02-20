<script setup lang="ts">
    import headerConUsuario from './HeaderConUsuario.vue';

</script>

<template>
    <headerConUsuario />
    <body>
        <input name="busqueda" id="busqueda" class="barraBusqueda" v-model="busqueda" />
        <button class="btn__busqueda" @click="getOneManga(busqueda)"><img src="../assets/images/busqueda.png" alt="icono de lupa"/></button>
        <div class="coleccion" v-on="getAllMangas()"> 
            <div class="producto" v-for="manga in this.mangas" :key="manga.id">
                <img :src="`${manga.imagen}`" alt="imagen del producto" class="mangas__imagen">
                <h6 class="manga__nombre">{{ manga.nombre }}</h6>
                <p class="manga__precio">{{ manga.precio }}</p>
            </div>
        </div>
    </body>

</template>

<script lang="ts">
    export default {
        data(){
            return{
                mangas: {},
                busqueda:""
            }
        },
        methods: {
            async getAllMangas(){
                try{
                    const response = await fetch("https://kimiback.onrender.com/api/v1/mangas");
                    this.mangas = await response.json();
                    return this.mangas
                }catch (err){
                    console.log(err);
                }
            },

            async getOneManga(busqueda){
                try{
                    const response = await fetch(`https://kimiback.onrender.com/api/v1/mangas/${busqueda}`);
                    this.mangas = await response.json();

                }catch (err){
                    console.log(err)
                }
            }
        }
    }
</script>