
<script setup>
    import HeaderLogin from './HeaderLogin.vue';
    import FooterInicio from './FooterInicio.vue';
    import BtnPequenio from './BtnPequeño.vue';
</script>

<template>
    <HeaderLogin />
    <body>
        <div class="contacto">
            <div class="contactanos">
                <h2 class="contactoTitulo">Contáctanos</h2>
                <h6 class="contacto__h6">Si tienes alguna duda,comentario o sugerencia puedes contactarnos y nos pondremos en contacto 
                    contigo lo antes posible.
                </h6>
                <img class="logoTienda" src="../assets/images/logoTienda2.png" alt="Logo de la página" />
            </div>
            <div class="lineaVertical2"></div>
            <div class="formulario__contacto">
                <form v-on:submit.prevent="contactar()">
                    <label for="nombreCompleto">Nombre completo </label>
                    <input type="text" name="nombreCompleto" id="nombreCompleto" v-model="nombrecompleto" v-on:blur="validarNombre" required  />
                    <p v-if="errorNombre" class="erroresContacto">Debe de tener al menos 3 letras</p>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" v-model="email" v-on:blur="validarEmail" required />
                    <p v-if="errorEmail" class="erroresContacto">El email no es válido.</p>
                    <label for="comentarios">Comentarios </label>
                    <textarea name="comentarios" id="cometario" v-model="comentarios" v-on:blur="validarComentarios" required>
                    </textarea>
                    <p v-if="errorComentario" class="erroresContacto">Escribe al menos 2 palabras.</p>
                    <input type="checkbox" id="checkBox"/>
                    <label class="politicas" >He leído y acepto la política de privacidad</label>
                    <BtnPequenio class="btn__enviarComentario">
                        <template #texto>Enviar</template>
                    </BtnPequenio>
                </form>
            </div>
        </div>
    </body>
    <FooterInicio />
</template>

<script>
    export default {
        data() {
            return{
                nombrecompleto: "",
                email: "",
                comentarios: "",
                errorNombre: false,
                errorEmail: false,
                errorComentario:false,

                nombreReg: new RegExp(/^[A-z]{3,}[\s]*[A-z]*/),
                emailReg: new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/),
                comentariosReg: new RegExp(/^[A-z]+\s[A-z]*/)
            }
        },

        methods: {
            validarNombre() {
                this.errorNombre = !this.nombreReg.test(this.nombrecompleto);
            },

            validarEmail() {
                this.errorEmail = !this.emailReg.test(this.email);
            },

            validarComentarios() {
                this.errorComentario = !this.comentariosReg.test(this.comentarios)
            },

            contactar(){
                if(!this.errorNombre && !this.errorEmail && !this.errorComentario){
                    alert("Comentarios enviados");
                    this.$router.push('listado');
                }
            }
        }

    }
</script>