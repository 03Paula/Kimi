<script setup>
    import HeaderLogin from './HeaderLogin.vue';
    import BtnInfoUsuario from './BtnInfoUsuario.vue';
    import BtnMedio from './BtnMedio.vue';
    import Footer from './Footer.vue';

    const nombre = localStorage.getItem("nombre")
</script>

<template>
    <HeaderLogin /> 
    <body>
        <div class="botones">
            <BtnInfoUsuario @click="datos('misDatos')" >
                <template #info>Mis datos</template>
            </BtnInfoUsuario>
            <BtnInfoUsuario @click="datos('pedidos')" >
                <template #info>Mis pedidos</template>
            </BtnInfoUsuario>
            <BtnInfoUsuario @click="datos('direcciones')" >
                <template #info>Direcciones</template>
            </BtnInfoUsuario>
            <BtnInfoUsuario @click="datos('tarjetas')" >
                <template #info>Tarjetas</template>
            </BtnInfoUsuario>
        </div>

        <div id="usuario" class="datosUsuario">
            <div class="informacionUsuario">
                <img  class="avatar" src="../assets/images/Hachi.jpg" alt="Avatar del usuario" />
                <div class="lineaVertical"></div>
                
                <div class="datos">
                    <h6>Nombre: {{ nombre }}</h6>
                    <h6>Apellidos: {{ apellidos }}</h6>
                    <h6>Email: {{ email }}</h6>
                    <h6>Nombre de usuario: {{ nombreusu }}</h6>
                </div>
            </div>
            <div class="botones">
                <BtnMedio @click="cerrarSesion">
                    <template #texto>Cerrar Sesión</template>
                </BtnMedio>
            </div>
            <div class="favoritos">
                <h5>Favoritos:</h5>
                <div class="productosFav">
                </div>
            </div>
        </div>

        <div id="pedidos" class="datosUsuario" style="display:none">
            <h2>Mis pedidos: </h2>
            <p>pedido</p>
        </div>

        <div id="direcciones" class="datosUsuario" style="display:none" >
            <h2>Mis direcciones</h2>
            <p>dirección...</p>
            <p @click="otradireccion=true">Añadir otra dirección</p>
            <label for="tipoCalle">Tipo de calle</label>
            <input id="tipoCalle" name="tipoCalle" placeholder="Avenida, calle..." type="text" required />
            <label for="nombreCalle">Nombre de la calle</label>
            <input id="nombreCalle" name="nombreCalle" type="text" required />
            <label for="numeroCalle">Número</label>
            <input type="number" id="numeroCalle" name="numeroCalle" required />
            <label for="piso"></label>
            <input id="piso" name="piso" type="text" />
            <label for="provincia">Provincia</label>
            <input id="provincia" name="provincia" type="text" required />
            <label for="codigoPostal">Código Postal</label>
            <input id="codigoPostal" name="codigoPostal" type="text" required />
            <BtnMedio>
                <template #texto>Añadir</template>
            </BtnMedio>
        </div>

        <div id="tarjetas" class="datosUsuario" style="display:none" >
            <h2>Mis tarjetas</h2>
        </div>
    </body>
    <Footer />
</template>

<script>
    export default {
        data() {
            return {
                usuario: {},
                nombre: localStorage.getItem("usuario"),
                apellidos: localStorage.getItem("apellidos"),
                email: localStorage.getItem("email"),
                nombreusu: localStorage.getItem("nombreusu")
            }
        },
        
    }

</script>