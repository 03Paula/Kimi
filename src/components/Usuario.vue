<script setup>
    import HeaderLogin from './HeaderLogin.vue';
    import BtnInfoUsuario from './BtnInfoUsuario.vue';
    import BtnMedio from './BtnMedio.vue';
    import Footer from './Footer.vue';
</script>

<template>
    <HeaderLogin /> 
    <body>
        <div class="botones">
            <BtnInfoUsuario >
                <template #info>Mis pedidos</template>
            </BtnInfoUsuario>
            <BtnInfoUsuario >
                <template #info>Direcciones</template>
            </BtnInfoUsuario>
            <BtnInfoUsuario >
                <template #info>Tarjetas</template>
            </BtnInfoUsuario>
        </div>

        <div class="informacionUsuario">
            <img  class="avatar" src="../assets/images/Hachi.jpg" alt="Avatar del usuario" />
            <div class="lineaVertical">

            </div>
            <div class="datos">
                <h6>Nombre: usuario1</h6>
                <h6>Apellidos: usu sus</h6>
                <h6>Email: superusu@gmail.com</h6>
                <h6>Fecha de nacimiento: 23/04/2000</h6>
                <h6>Contraseña: *********</h6>
            </div>
        </div>
        <div class="botones">
            <BtnMedio>
                <template #texto>Cambiar avatar</template>
        </BtnMedio>
        <BtnMedio>
            <template #texto>Editar datos</template>
        </BtnMedio>
        </div>
        <div class="favoritos">
            <h5>Favoritos:</h5>
            <div class="productosFav">

            </div>
        </div>
    </body>
    <Footer />
</template>