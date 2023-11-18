<template>
    <div class="container">
      <h1>Formulario de Clientes</h1>
      <form id="client-form" @submit.prevent="guardar">
        <div class="form-group">
          <label for="codigo">Código:</label>
          <input type="text" id="codigo" name="codigo" required  v-model="codigo" />
        </div>
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required v-model="nombre"/>
        </div>
        <div class="form-group">
          <label for="telefono">Teléfono:</label>
          <input type="number" id="telefono" name="telefono" required v-model="telefono"/>
        </div>
        <div class="form-group">
          <label for="">Dirección:</label>
          <input type="text" id="direccion" name="direccion" required v-model="direccion" />
        </div>
        <div class="form-group">
          <label for="">Ciudad:</label>
          <input type="text" id="ciudad" name="ciudad" required v-model="ciudad"/>
        </div>
  
        <button type="submit" id="guardar" name="guardar">Guardar</button><br />
        <button type="button" id="eliminar" name="eliminar" @click="eliminar"> Eliminar</button ><br />
        <button type="button" id="actualizar" name="actualizar"  @click="actualizar"> Actualizar</button><br />
        <button type="button" id="consultar" name="consultar" @click="consultar"> Consultar</button><br />
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
          alert("exito");
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
        .get('http://localhost:8082/api/clientes/'+this.codigo)
        .then((response) => {
          // Actualizar los campos del formulario con los datos del cliente consultado
          this.nombre = response.data.nombre;
          this.apellido = response.data.apellido;
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
        .put("http://localhost:8082/api/clientes/actualizar/"+this.codigo, {
          codigo:this.codigo,
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
        .delete("http://localhost:8082/api/clientes/"+this.codigo)
        .then(() => {
          console.log("Cliente eliminado con éxito");
          // Limpiar los campos del formulario después de eliminar
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
