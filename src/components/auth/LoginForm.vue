<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center" q-pa-md style="height: 100vh">
        <q-card-section>
          <h5>Inicio de sesion</h5>
        </q-card-section>

        <q-card-section>
          <q-input
            v-model="emailValue"
            standout="bg-teal text-white"
            label="Email"
            outlined
            dense
          />
          <q-input
            v-model="pwValue"
            type="password"
            standout="bg-teal text-white"
            label="Password"
            outlined
            dense
          />
        </q-card-section>

        <q-card-section>
          <q-btn label="Login" color="orange" @click="inicioSesion"></q-btn>
        </q-card-section>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style></style>

<script>
import { BottomSheet } from "quasar";

//grabamos variables user password
export default {
  name: "LoginForm",
  data() {
    return {
      emailValue: "",
      pwValue: "",
    };
  },
  methods: {
    inicioSesion() {
      console.log("hizo clic en boton sesion");
      console.log("valor del correo: " + this.emailValue);

      let endpointlogin = "/api/v1/user/signin";
      let user = { email: this.emailValue, password: this.pwValue };
      this.$api
        .post(endpointlogin, user)
        .then((response) => {
          //respuesta exitosa
          console.log("respuesta exitosa " + JSON.stringify(response));
          this.$q.notify({
            message: "Entrada exitosa",
            color: "positive",
            position: "bottom",
            timeout: 5000,
          });
          this.$router.push("/peliculas/listado"); // redireccion pagina raiz
        })
        .catch((error) => {
          //Ocurrio un error
          this.$q.notify({
            message: "Hay un error",
            color: "negative",
            position: "bottom",
            timeout: 5000,
          });
          console.log("Error en: " + error);
        });
    },
  },
};
</script>
