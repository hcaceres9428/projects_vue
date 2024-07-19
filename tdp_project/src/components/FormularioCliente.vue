<template>
  <div class="container">
    <h1>Formulario de Clientes</h1>
    <form id="client-form" @submit.prevent="guardar">
      <div class="form-group">
        <label for="codigo">Código:</label>
        <input type="text" id="codigo" name="codigo" required v-model="codigo" />
      </div>
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required v-model="nombre" />
      </div>
      <div class="form-group">
        <label for="telefono">Teléfono:</label>
        <input type="number" id="telefono" name="telefono" required v-model="telefono" />
      </div>
      <div class="form-group">
        <label for="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion" required v-model="direccion" />
      </div>
      <div class="form-group">
        <label for="ciudad">Ciudad:</label>
        <input type="text" id="ciudad" name="ciudad" required v-model="ciudad" />
      </div>
      <div class="button-group">
        <button type="submit" id="guardar" name="guardar">Guardar</button>
        <button type="button" id="eliminar" name="eliminar" @click="eliminar">Eliminar</button>
        <button type="button" id="actualizar" name="actualizar" @click="actualizar">Actualizar</button>
        <button type="button" id="consultar" name="consultar" @click="consultar">Consultar</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      codigo: "",
      nombre: "",
      telefono: null,
      direccion: "",
      ciudad: "",
    };
  },
  methods: {
    guardar() {
      axios
        .post("http://localhost:8082/api/clientes", {
          codigo: this.codigo,
          nombre: this.nombre,
          telefono: this.telefono,
          direccion: this.direccion,
          ciudad: this.ciudad,
        })
        .then((response) => {
          console.log("Cliente registrado con éxito:", response.data);
          alert("Cliente registrado con éxito");
          this.codigo = '';
          this.nombre = '';
          this.telefono = '';
          this.direccion = '';
          this.ciudad = '';
        })
        .catch((error) => {
          console.error("Error al registrar cliente:", error);
        });
    },
    consultar() {
      axios
        .get('http://localhost:8082/api/clientes/' + this.codigo)
        .then((response) => {
          this.nombre = response.data.nombre;
          this.telefono = response.data.telefono;
          this.direccion = response.data.direccion;
          this.ciudad = response.data.ciudad;
        })
        .catch((error) => {
          console.error("Error al consultar cliente:", error);
        });
    },
    actualizar() {
      axios
        .put("http://localhost:8082/api/clientes/actualizar/" + this.codigo, {
          codigo: this.codigo,
          nombre: this.nombre,
          telefono: this.telefono,
          direccion: this.direccion,
          ciudad: this.ciudad,
        })
        .then((response) => {
          console.log("Cliente actualizado con éxito:", response.data);
        })
        .catch((error) => {
          console.error("Error al actualizar cliente:", error);
        });
    },
    eliminar() {
      axios
        .delete("http://localhost:8082/api/clientes/" + this.codigo)
        .then(() => {
          console.log("Cliente eliminado con éxito");
          this.codigo = "";
          this.nombre = "";
          this.telefono = '';
          this.direccion = '';
          this.ciudad = '';
        })
        .catch((error) => {
          console.error("Error al eliminar cliente:", error);
        });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="number"] {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

.button-group {
  text-align: center;
}

button {
  padding: 10px 20px;
  margin: 10px 5px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

button[type="button"] {
  background-color: #ff66c4;
}

button[type="button"]:hover {
  background-color: #e055a8;
}
</style>
