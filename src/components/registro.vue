<script setup lang="ts" >
    import HeaderLogin from './HeaderLogin.vue';
    import BotonMediano from './BtnMedio.vue';
    import Footer from './Footer.vue'

</script>

<template>
    <HeaderLogin />
    <body>
        <img src="../assets/images/flor.png" class="flor-derecha" />
        <div class="formulario__registro">
            <form v-on:submit.prevent="registrar()">
                <h2 class="registro">Registro</h2>
                <label for="nombre">Nombre </label>
                <input type="text" name="nombre" id="nombre" v-model="nombre" v-on:blur="validarNombre" required/>
                <p v-if="errorNombre" class="errorRegistro">El nombre debe de tener al menos 3 letras</p>
                <label for="apellidos">Apellidos</label>
                <input type="text" name="apellidos" id="apellidos" v-model="apellidos" v-on:blur="validarApellidos" required/>
                <p v-if="errorApellidos" class="errorRegistro" >Debe de tener al menos 3 letras </p>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" v-model="email" v-on:blur="validarEmail" required/>
                <p v-if="errorEmail" class="errorRegistro" >El email no es válido.</p>
                <label for="nombreUsu" >Nombre de usuario</label>
                <input type="text" name="nombreUsu" id="nombreUsu" v-model="nombreUsu" v-on:blur="validarNombreusu" required/>
                <p v-if="errorNombreusu" class="errorRegistro" >El nombre de usuario debe de tener entre 4 y 16 letras</p>
                <label for="contrasenia">Contraseña</label>
                <input type="password" name="contrasenia" id="contrasenia" v-model="contraseña" v-on:blur="validarContraseña" required/>
                <p v-if="errorContraseña" class="errorRegistro" >La contraseña debe de tener minimo 1 mayúscula,1 minúscula, 1 número y tener entre 8 y 16 letras.</p>
                <label for="repContrasenia">Repite la contraseña</label>
                <input type="password" name="repContrasenia" id="repContrasenia" v-model="repContraseña" v-on:blur="coincidenContraseña" required/>
                <p v-if="coincide" class="errorRegistro">Las contraseñas no coindicen</p>
                <RouterLink to="/login" style="text-decoration: none; color: inherit;" ><p class="registrado">Ya tengo cuenta</p></RouterLink>
                <BotonMediano class="btn__registro">
                    <template #texto>Regístrame</template>
                </BotonMediano>
            </form>
            
        </div>
        <img src="../assets/images/flor2.png" class="flor-izquierda__registro" />
        <img src="../assets/images/pngegg-3 1.png" class="muneco" />
        <Footer />
    </body>
   
</template>


<script lang="ts">
/**
 * @file Registro.vue
 * @author Paula Flor
 * 
 * @vue-data {Object} usuarios - Almacena la información del usuario.
 * @vue-data {String} nombre - Almacena el nombre del usuario.
 * @vue-data {String} apellidos - Almacena los apellidos del usuario.
 * @vue-data {String} email - Almacena el email del usuario.
 * @vue-data {String} nombreusu - Almacena el nombre de usuario.
 * @vue-data {String} contraseña - Almacena la contraseña del usuario.
 * @vue-data {String} repContraseña - Almacena contraseña repetida del usuario.
 * @vue-data {Boolean} errorNombre - Muestra el mensaje de error si es true.
 * @vue-data {Boolean} errorApellidos - Muestra el mensaje de error si es true.
 * @vue-data {Boolean} errorEmail - Muestra el mensaje de error si es true.
 * @vue-data {Boolean} errorNombreusu - Muestra el mensaje de error si es true.
 * @vue-data {Boolean} errorContrasema - Muestra el mensaje de error si es true.
 * @vue-data {Boolean} coincide - Muestra el mensaje de error la contraseña no coincide con laa repContraseña.
 * @vue-data {String} nombreReg - Expresión regular para validar el nombre.
 * @vue-data {String} emailReg - Expresión regular que valida el email.
 * @vue-data {String} nombreusuReg - Expresión regular para validar el nombre de usuario.
 * @vue-data {String} contraseniaReg - Expreción regular para validar la contraseña.
 * 
 * @vue-event validarNombre - Valida el nombre con la expresión regular correspondiente.
 * @vue-event validarApellidos- Valida los apellidos con la expresión regular correspondiente.
 * @vue-event validarEmail - Valida el email con la expresión regular correspondiente.
 * @vue-event validarNombreusu - Valida el nombre de usuario con la expresión regular correspondiente.
 * @vue-event validarContraseña - Valida la contraseña con la expresión regular correspondiente.
 * @vue-event coincideContraseña - Valida si la contraseña es igual a repContraseña.
 * @vue-event registrar - Si no hay fallos se almacenan los datos en el localStorage y se redirige al listado.
 */
    export default {
        data() {
            return {
                usuarios: {},
                nombre:"",
                apellidos:"",
                email:"",
                nombreUsu:"",
                contraseña:"",
                repContraseña:"",
                errorNombre:false,
                errorApellidos:false,
                errorEmail:false,
                errorNombreusu:false,
                errorContraseña:false,
                coincide:false,

                nombreReg: new RegExp(/^[A-z]{3,}[\s]*[A-z]*/),
                emailReg: new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/),
                nombreusuReg: new RegExp(/^[\S]{4,16}$/),
                contraseniaReg: new RegExp(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/),
            }
        },
        methods: {
            async getAllusuario(){
                try{
                    const response = await fetch("https://kimiback.onrender.com/api/v1/usuarios");
                    this.usuarios = await response.json();
                }catch (err){
                    console.log(err)
                }
            },

            async postUsuario(usuario){
                try{
                    const response = await fetch("https://kimiback.onrender.com/api/v1/usuarios", {
                        method: "POST",
                        body: JSON.stringify(usuario),
                        headers: { 'Content-Type': 'application/json; charset=utf-8' }
                    });
                    const usuarioCreado = await response.json();
                    this.usuarios = [...this.usuarios, usuarioCreado];
                }catch(err){
                    console.log(err)
                }
            },

            validarNombre(){
                this.errorNombre = !this.nombreReg.test(this.nombre);
            },

            validarApellidos(){
                this.errorApellidos = !this.nombreReg.test(this.apellidos);
            },

            validarEmail(){
                this.errorEmail = !this.emailReg.test(this.email);
            },

            validarNombreusu(){
                this.errorNombreusu = !this.nombreusuReg.test(this.nombreUsu);
            },

            validarContraseña(){
                this.errorContraseña = !this.contraseniaReg.test(this.contraseña);
            },

            
            coincidenContraseña(){
                this.coincide = !(this.contraseña === this.repContraseña);
            },

            registrar(){
                if(!this.errorNombre && !this.errorApellidos && !this.errorEmail && !this.errorNombreusu && !this.errorContraseña && !this.coincide){
                    console.log("Hola")
                    const usuario = {
                        "nombre": this.nombre,
                        "apellidos": this.apellidos,
                        "email": this.email,
                        "nombreusu": this.nombreUsu,
                        "contraseña": this.contraseña,
                        "direcciones": "",
                        "tarjetas": ""
                    }

                    this.postUsuario(usuario);
                    this.registrar == true;
                    localStorage.getItem("usuario");
                    localStorage.setItem("usuario", this.nombre);
                    localStorage.setItem("apellidos", this.apellidos);
                    localStorage.setItem("email", this.email);
                    localStorage.setItem("nombreusu", this.nombreUsu);
                    localStorage.setItem("direcciones", ""),
                    localStorage.setItem("tarjetas", "");
                    this.$router.push('listado')
                    alert("Registro con éxito")
                }
            }
            
        }
    }
</script>