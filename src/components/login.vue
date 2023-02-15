<script setup>
    import HeaderLogin from './HeaderLogin.vue';
    import BotonMediano from './BtnMedio.vue'
    import Footer from './Footer.vue';
</script>

<template>
    <HeaderLogin />
    <body>
        <img src="../assets/images/flor.png" class="flor-derecha" />
        <div class="formulario">
            <h2 class="login">Inicio de Sesión</h2>
            <label for="nombreUsu">Nombre de usuario </label>
            <input type="text" name="nombreUsu" id="nombreUsu" />
            <label for="contrasenia">Contraseña</label>
            <input type="password" name="contrasenia" id="contrasenia" />
            <input type="checkbox"/>
            <label class="recordar" >Recuerdame</label>
            <RouterLink to="/registro" style="text-decoration: none; color: inherit;" ><p class="no__registrado" >No estoy registrado</p></RouterLink>
            <RouterLink to="/listado" style="text-decoration: none; color: inherit;" >
                <BotonMediano>
                    <template #texto>Iniciar sesión</template>
                </BotonMediano>
            </RouterLink>
            
        </div>
      <img src="../assets/images/flor2.png" class="flor-izquierda" />
      <img src="../assets/images/pngegg-2 1.png" class="muneco" />
    </body>
    <Footer />
    <RouterView></RouterView>
</template>