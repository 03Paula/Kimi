
<script setup>
    import HeaderLogin from '@/components/HeaderLogin.vue'
    import BotonMediano from '@/components//BtnMedio.vue'
    import Footer from '@/components//Footer.vue'
</script>

<template>
    <HeaderLogin />
    <body>
        <img src="../assets/images/flor.png" class="flor-derecha" />
        <div class="formulario">
            <form v-on:submit.prevent="compruebaUsuario(nombreUsu, contraseña)">  
                <h2 class="login">Inicio de Sesión</h2>
                <label for="nombreUsu">Nombre de usuario </label>
                <input type="text" name="nombreUsu" id="nombreUsu" v-model="nombreUsu" required/>
                <label for="contraseña">Contraseña</label>
                <input type="password" name="contraseña" id="contraseña" v-model="contraseña" required />
                <p v-if="error" class="errorLogin">El nombre de usuario o contraseña no son correctos.</p>
                <input type="checkbox"/>
                <label class="recordar" >Recuerdame</label>
                <RouterLink to="/registro" style="text-decoration: none; color: inherit;" ><p class="no__registrado" >No estoy registrado</p></RouterLink>
                    <BotonMediano>
                        <template #texto>Iniciar sesión</template>
                    </BotonMediano>
            </form>
        </div>
      <img src="../assets/images/flor2.png" class="flor-izquierda" />
      <img src="../assets/images/muneco.png" class="muneco" />
    </body>
    <Footer />
    <RouterView></RouterView>
</template>

<script>
/**
 * @file Login.vue
 * @author Paula Flor
 * 
 * @vue-data [Object] usuario - Almacena la información del usuario.
 * @vue-data {String} nombreUsu - Almacena el nombre de usuario.
 * @vue-data {String} contraseña - Almacena la contraseña del usuario.
 * @vue-data {Boolean} error - Muestra el mensaje de error si es true.
 * 
 * @vue-event compruebaUsuario - Hace una llamada a la api con el nombre de usuario y compara el nombre de usuario y la contraseña para ver si son correctos.
 */
    export default {
        data() {
            return {
                usuario: {},
                nombreUsu:"",
                contraseña:"",
                error:false,
            };
        },
        methods: {
            async compruebaUsuario(nombreUsu, contraseña){
                try{
                    const response = await fetch(`https://kimiback.onrender.com/api/v1/usuarios/${nombreUsu}`);
                    this.usuario = await response.json();

                    if(this.usuario.nombreusu == nombreUsu && this.usuario.contraseña == contraseña){
                        localStorage.getItem("usuario", nombreUsu)
                        alert("Inicio de sesión con exito")
                        localStorage.setItem("usuario", this.usuario.nombre)
                        localStorage.setItem("apellidos", this.usuario.apellidos);
                        localStorage.setItem("email", this.usuario.email);
                        localStorage.setItem("nombreusu", this.usuario.nombreusu)
                        this.$router.push('listado')
                    }else {
                        this.error = true;
                    }
                }catch(err){
                    this.error = true;
                }
                
            }
        }
    }

</script>