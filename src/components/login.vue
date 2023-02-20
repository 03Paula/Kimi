
<script setup>
    import HeaderLogin from './HeaderLogin.vue'
    import BotonMediano from './BtnMedio.vue'
    import Footer from './Footer.vue'
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
      <img src="../assets/images/pngegg-2 1.png" class="muneco" />
    </body>
    <Footer />
    <RouterView></RouterView>
</template>

<script>
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