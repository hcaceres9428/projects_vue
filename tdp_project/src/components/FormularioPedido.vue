<template>
    <div class="container">
      <h1>Formulario de Pedidos</h1>
      <form id="Pedisos-form" @submit.prevent="guardar">
        <div class="form-group">
          <label for="codigo">Código:</label>
          <input type="text" id="codigo" name="codigo" required  v-model="codigo" />
        </div>
        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required v-model="nombre"/>
        </div>
        <div class="form-group">
          <label for="detalles">Telefono:</label>
          <input type="text" id="detalles" name="detalles" required v-model="detalles"/>
        </div>
        <div class="form-group">
          <label for="fPed">Fecha de pedido:</label>
          <input type="datetime" id="fPed" name="fPed" required v-model="fPed" />
        </div>
        <div class="form-group">
          <label for="fenv">Fecha de Entrega:</label>
          <input type="datetime" id="fEnv" name="fEnv" required v-model="fenv"/>
        </div>
        <div class="form-group">
          <label for="img">Fecha de pedido:</label>
          <input type="image" id="img" name="img" required v-model="img" />
        </div>
        <div class="form-group">
          <label for="valor">Valor:</label>
          <input type="number" id="valor" name="valor" required v-model="valor"/>
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
      detalles: "",
      fPed: "",
      fEnv: "",
      img:null,
      valor:null,
    };

  },

  methods: {
    guardar() {
      
      axios
        .post("http://localhost:8082/api/pedidos", {
            codigo: this.codigo,
            nombre: this.nombre,
            detalles: this.detalles,
            fPed: this.fPed,
            fEnv: this.fEnv,
            valor: this.valor,
        })
        .then((response) => {
          console.log("Pedido registrado con éxito:", response.data);
          alert("exito");
          this.codigo = '';
          this.nombre = '';
          this.detalles = '';
          this.fPed = '';
          this.fEnv = '';
          this.img = '';
          this.valor = '';
        })
        .catch((error) => {
          console.error("Error al registrar pedido:", error);
        });
    },
    
    consultar() {
      
      axios
        .get('http://localhost:8082/api/pedidos/'+this.codigo)
        .then((response) => {
          // Actualizar los campos del formulario con los datos del pedido consultado
          this.codigo = response.data.codigo;
          this.nombre = response.data.nombre;
          this.detalles = response.data.detalles;
          this.fPed = response.data.fPed;
          this.fEnv = response.data.fenv;
          this.img = response.data.img;
          this.valor = response.data.valor;
        })
        .catch((error) => {
          console.error("Error al consultar pedodo:", error);
        });
    },


    actualizar() {
      
      axios
        .put("http://localhost:8082/api/pedidos/actualizar/"+this.codigo, {
            codigo: this.codigo,
            nombre: this.nombre,
            detalles: this.detalles,
            fPed: this.fPed,
            fEnv: this.fEnv,
            valor: this.valor,
        })
        .then((response) => {
          console.log("pedodo actualizado con éxito:", response.data);
        })
        .catch((error) => {
          console.error("Error al actualizar pedodo:", error);
        });
    },
    eliminar() {
     
      axios
        .delete("http://localhost:8082/api/pedidos/"+this.codigo)
        .then(() => {
          console.log("Pedido eliminado con éxito");
          // Limpiar los campos del formulario después de eliminar
          this.codigo = '';
          this.nombre = '';
          this.detalles = '';
          this.fPed = '';
          this.fEnv = '';
          this.img = '';
          this.valor = '';
        })
        .catch((error) => {
          console.error("Error al eliminar pedido:", error);
        });
    },
  },
};
</script>
