<template>
  <div class="container">
    <h1>Formulario de Pedidos</h1>
    <form id="Pedidos-form" @submit.prevent="guardar">
      <div class="form-group">
        <label for="codigo">Código:</label>
        <input type="text" id="codigo" name="codigo" required v-model="codigo" />
      </div>
      <div class="form-group">
        <label for="cliente">Cliente:</label>
        <input type="text" id="cliente" name="cliente" required v-model="cliente"/>
      </div>
      <div class="form-group">
        <label for="telefono">Teléfono:</label>
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
        <label for="fAprox">Fecha Estimada:</label>
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
      <button type="button" id="eliminar" name="eliminar" @click="eliminar">Eliminar</button><br />
      <button type="button" id="actualizar" name="actualizar" @click="actualizar">Actualizar</button><br />
      <button type="button" id="consultar" name="consultar" @click="consultar">Consultar</button><br />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      codigo: "",
      cliente: "",
      telefono: null,
      producto: "",
      detalles: "",
      fPed: "",
      fAprox: "",
      fEnv: "",
      valorAprox: null,
      valor: null
    };
  },
  methods: {
    guardar() {
      axios.post("http://localhost:8082/api/pedidos", {
        codigo: this.codigo,
        cliente: this.cliente,
        telefono: this.telefono,
        producto: this.producto,
        detalles: this.detalles,
        fPed: this.fPed,
        fAprox: this.fAprox,
        fEnv: this.fEnv,
        valorAprox: this.valorAprox,
        valor: this.valor
      })
      .then((response) => {
        console.log("Pedido registrado con éxito:", response.data);
        alert("Éxito");
        this.limpiarCampos();
      })
      .catch((error) => {
        console.error("Error al registrar pedido:", error);
      });
    },
    consultar() {
      axios.get("http://localhost:8082/api/pedidos/" + this.codigo)
      .then((response) => {
        const pedido = response.data;
        this.codigo = pedido.codigo;
        this.cliente = pedido.cliente;
        this.telefono = pedido.telefono;
        this.producto = pedido.producto;
        this.detalles = pedido.detalles;
        this.fPed = pedido.fPed;
        this.fAprox = pedido.fAprox;
        this.fEnv = pedido.fEnv;
        this.valorAprox = pedido.valorAprox;
        this.valor = pedido.valor;
      })
      .catch((error) => {
        console.error("Error al consultar pedido:", error);
      });
    },
    actualizar() {
      axios.put("http://localhost:8082/api/pedidos/actualizar/" + this.codigo, {
        codigo: this.codigo,
        cliente: this.cliente,
        telefono: this.telefono,
        producto: this.producto,
        detalles: this.detalles,
        fPed: this.fPed,
        fAprox: this.fAprox,
        fEnv: this.fEnv,
        valorAprox: this.valorAprox,
        valor: this.valor
      })
      .then((response) => {
        console.log("Pedido actualizado con éxito:", response.data);
      })
      .catch((error) => {
        console.error("Error al actualizar pedido:", error);
      });
    },
    eliminar() {
      axios.delete("http://localhost:8082/api/pedidos/" + this.codigo)
      .then(() => {
        console.log("Pedido eliminado con éxito");
        this.limpiarCampos();
      })
      .catch((error) => {
        console.error("Error al eliminar pedido:", error);
      });
    },
    limpiarCampos() {
      this.codigo = "";
      this.cliente = "";
      this.telefono = null;
      this.producto = "";
      this.detalles = "";
      this.fPed = "";
      this.fAprox = "";
      this.fEnv = "";
      this.valorAprox = null;
      this.valor = null;
    }
  }
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
