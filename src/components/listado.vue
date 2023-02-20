<script setup lang="ts">
    import headerConUsuario from './HeaderConUsuario.vue';
    import BtnMedio from './BtnMedio.vue';
    import BtnPequeño from './BtnPequeño.vue';
</script>

<template>
    <headerConUsuario />
    <body>
        <input name="busqueda" id="busqueda" class="barraBusqueda" v-model="busqueda" />
        <button class="btn__busqueda" @click="getOneManga(busqueda)"><img src="../assets/images/busqueda.png" alt="icono de lupa"/></button>
        <div class="botonesListado">
            <BtnMedio @click="mostrarMangas()" v-on="getAllMangas()">
                <template #texto>Mangas</template>
            </BtnMedio>
            <BtnMedio @click="mostrarFiguras()" v-on="getAllFiguras()">
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

        <div class="tiempo" v-on="getTiempo()" v-for="t in this.tiempo" >
            {{ t.place }}
        </div>
    </body>

</template>


<script lang="ts">
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

            async getAllFiguras(){
                try{
                    const response = await fetch("https://kimiback.onrender.com/api/v1/figuras/");
                    this.figuras = await response.json();
                    return this.figuras
                }catch (err){
                    console.log(err);
                }
            },

            async getOneManga(busqueda){
                try{
                    const datos = await fetch(`https://kimiback.onrender.com/api/v1/mangas/${busqueda}`);
                    this.mangas = await datos.json();

                }catch (err){
                    console.log(err)
                }
            },

            mostrarMangas(){
                this.manga = true;
                this.figura = false;
            },

            mostrarFiguras(){
                this.manga = false;
                this.figura = true
            },

            async getTiempo(){
                try{
                    const response = await fetch(`https://api.aerisapi.com/observations/seattle,wa?client_id=vzDODVYTBCdPXi0bZ0EBA&client_secret=rRhxvq1or0wYB098422T0YENQdSkLXseQowqDYUm`)
                    this.tiempo = await response.json();
                    
                }catch (err){
                    console.log(err)
                }
            }
        }
    }
</script>