<template>
  <div class="container">
    <h1>Formulario de Pedidos</h1>
    <form id="Pedidos-form" @submit.prevent="guardar">
      <div class="form-group">
        <label for="codigo">Código:</label>
        <input type="text" id="codigo" name="codigo" required  v-model="codigo" />
      </div>
      <div class="form-group">
        <label for="cliente">Cliente:</label>
        <input type="text" id="cliente" name="cliente" required v-model="cliente"/>
      </div>
      <div class="form-group">
          <label for="telefono">telefono:</label>
          <input type="number" id="telefono" name="telefono" required v-model="telefono"/>
        </div>
      <div class="form-group">
        <label for="producto">Producto:</label>
        <input type="text" id="producto" name="producto" required v-model="producto"/>
      </div>
      <div class="form-group">
        <label for="detalles">Detalles:</label>
        <input type="text" id="detalles" name="detalles" required v-model="detalles"/>
      </div>
      <div class="form-group">
        <label for="fPed">Fecha de pedido:</label>
        <input type="date" id="fPed" name="fPed" required v-model="fPed" />
      </div>
      <div class="form-group">
        <label for="fAprox">Fecha de Estimada:</label>
        <input type="date" id="fAprox" name="fAprox" required v-model="fAprox"/>
      </div>
      <div class="form-group">
        <label for="fEnv">Fecha de Entrega:</label>
        <input type="date" id="fEnv" name="fEnv" required v-model="fEnv"/>
      </div>
      <div class="form-group">
        <label for="valorAprox">Valor Tentativo:</label>
        <input type="number" id="valorAprox" name="valorAprox" required v-model="valorAprox"/>
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
      codigo: null,
      cliente: "",
      telefono:null,
      producto: "",
      detalles: "",
      fPed: "",
      fAprox:"",
      fEnv: "",
      valor:null,
      valorAprox: null,
    };

  },

  methods: {
        
    guardar() {
    
      axios
        .post("https://localhost:8082/api/pedidos", {
            codigo: this.codigo,
            cliente: this.cliente,
            telefono: this.telefono,
            producto: this.producto,
            detalles: this.detalles,
            fPed: this.fPed,
            fAprox: this.fAprox,
            fEnv: this.fEnv,
            valor: this.valor,
            valorAprox: this.valorAprox,
        })
        .then((response) => {
          console.log("Pedido registrado con éxito:", response.data);
          alert("exito");
          this.codigo = '';
          this.telefono = '',
          this.cliente = '';
          this.producto ='';
          this.detalles = '';
          this.fPed = '';
          this.fAprox = '';
          this.fEnv = '';
          this.valor = '';
          this.valorAprox = '';
        })
        .catch((error) => {
          console.error("Error al registrar pedido:", error);
        });
    },
    
    consultar() {
      
      axios
        .get('https://localhost:8082/api/pedidos/'+this.codigo)
        .then((response) => {
          // Actualizar los campos del formulario con los datos del pedido consultado
          this.codigo = response.data.codigo;
          this.cliente = response.data.cliente;
          this.telefono = response.data.telefono;
          this.producto = response.data.producto;
          this.detalles = response.data.detalles;
          this.fPed = response.data.fPed;
          this.fAprox = response.data.fAprox;
          this.fEnv = response.data.fEnv;
          this.valor = response.data.valor;
          this.valorAprox = response.data.valorAprox;
        })
        .catch((error) => {
          console.error("Error al consultar pedodo:", error);
        });
    },


    actualizar() {
      
      axios
        .put("https://localhost:8082/api/pedidos/actualizar/"+this.codigo, {
            codigo: this.codigo,
            cliente: this.cliente,
            telefono:this.telefono,
            producto: this.producto,
            detalles: this.detalles,
            fPed: this.fPed,
            fAprox: this.fAprox,
            fEnv: this.fEnv,
            valor: this.valor,
            valorAprox: this.valorAprox,
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
        .delete("https://localhost:8082/api/pedidos/"+this.codigo)
        .then(() => {
          console.log("Pedido eliminado con éxito");
          // Limpiar los campos del formulario después de eliminar
          this.codigo = '';
          this.cliente = '';
          this.telefono= '';
          this.producto= '';
          this.detalles = '';
          this.fPed = '';
          this.fAprox = '';
          this.fEnv = '';
          this.valor = '';
          this.valorAprox = '';
        })
        .catch((error) => {
          console.error("Error al eliminar pedido:", error);
        });
        
    },
  },
};
</script>