<script setup >
    import headerConUsuario from './HeaderConUsuario.vue';
    import BtnMedio from './BtnMedio.vue';
    import axios from 'axios';
</script>

<template>
    <headerConUsuario />
    <body>
        <div class="botonesListado">
            <BtnMedio @click="mostrarMangas" >
                <template #texto>Mangas</template>
            </BtnMedio>
            <BtnMedio @click="mostrarFiguras" >
                <template #texto>Figuras</template>
            </BtnMedio>
        </div>
        
        <h2 v-if="manga" class="textoListado">Mangas</h2>
        <div class="coleccion" v-if="manga"> 
            <div class="producto" v-for="manga in this.mangas" :key="manga.id">
                <img :src="`${manga.imagen}`" alt="imagen del producto" class="mangas__imagen">
                <h6 class="manga__nombre">{{ manga.nombre }}</h6>
                <p class="manga__precio">{{ manga.precio }}</p>
            </div>
        </div>

        <h2 v-if="figura" class="textoListado">Figuras</h2>
        <div class="coleccion" v-if="figura">
            <div class="producto" v-for="fig in this.figuras" :key="fig.id">
                <img :src="`${fig.imagen}`" alt="imagen del producto" class="mangas__imagen">
                <h6 class="manga__nombre">{{ fig.nombre }}</h6>
                <p class="manga__precio">{{ fig.precio }}</p>
            </div>
        </div>

    </body>

</template>


<script>
/**
 * @file Listado.vue - Componente para la página de listado.
 * @author Paula Flor
 * 
 * @vue-data {Object} mangas - Almacena todos los mangas.
 * @vue-data {String} busqueda - Almacena el nombre del manga a buscar.
 * @vue-data {Object} tiempo - Almacena los datos del tiempo.
 * 
 * @vue-event {Object} getAllMangas - Obtiene todos los mangas.
 * @vue-event {Object} getOneManga - Obtiene el manga pedido.
 * @vue-event {Object} getTiempo - Obtiene la información del tiempo.
 * 
 */
    export default {
        data(){
            return{
                mangas: {},
                figuras: {},
                busqueda:"",
                tiempo:{},
                manga:true,
                figura:false
            }
        },
        mounted(){
            this.getAllMangas();
            this.getAllFiguras();
        },
        methods: {
            getAllMangas(){
                axios 
                .get('https://kimiback.onrender.com/api/v1/mangas/')
                .then((result =>{
                    this.mangas = result.data
                }
                ))
            },
        
            getAllFiguras(){
                axios
                    .get('https://kimiback.onrender.com/api/v1/figuras/')
                    .then((result => {
                        this.figuras = result.data
                    }))
            },


            mostrarMangas(){
                this.manga = true;
                this.figura = false;
            },

            mostrarFiguras(){
                this.manga = false;
                this.figura = true
            },

            search(){

            }

        }
    }
</script>