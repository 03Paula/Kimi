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
                <label for="nombreCompleto">Nombre completo </label>
                <input type="text" name="nombreCompleto" id="nombreCompleto" />
                <label for="email">Email</label>
                <input type="email" name="email" id="email" />
                <label for="comentarios">Comentarios </label>
                <textarea name="comentarios" id="cometario">
                </textarea>
                <input type="checkbox"/>
                <label class="politicas" >He leído y acepto la política de privacidad</label>
                <BtnPequenio class="btn__enviarComentario">
                    <template #texto>Enviar</template>
                </BtnPequenio>
            </div>
        </div>
    </body>
    <FooterInicio />

</template>