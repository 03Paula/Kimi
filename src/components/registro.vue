<script setup>
    import HeaderLogin from './HeaderLogin.vue';
    import BotonMediano from './BtnMedio.vue';
    import Footer from './Footer.vue'
</script>

<template>
    <HeaderLogin />
    <body>
        <img src="../assets/images/flor.png" class="flor-derecha" />
        <div class="formulario__registro">
            <h2 class="registro">Registro</h2>
            <label for="nombre">Nombre </label>
            <input type="text" name="nombre" id="nombre" />
            <label for="apellidos">Apellidos</label>
            <input type="text" name="apellidos" id="apellidos" />
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
            <label for="nacimiento">Fecha de nacimiento</label>
            <input type="date" name="nacimiento" id="nacimiento" />
            <label for="nombreUsu" >Nombre de usuario</label>
            <input type="text" name="nombreUsu" id="nombreUsu" />
            <label for="contrasenia">Contraseña</label>
            <input type="password" name="contrasenia" id="contrasenia" />
            <label for="repContrasenia">Repite la contraseña</label>
            <input type="password" name="repContrasenia" id="repContrasenia" />
            <p class="registrado">Ya tengo cuenta</p>
            <BotonMediano class="btn__registro">
                <template #texto>Regístrame</template>
            </BotonMediano>
        </div>
        <img src="../assets/images/flor2.png" class="flor-izquierda__registro" />
        <img src="../assets/images/pngegg-3 1.png" class="muneco" />
        <Footer />
    </body>
   
</template>