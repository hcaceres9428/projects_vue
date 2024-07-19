<template>
    <div class="app">
      <div class="title">
        <h1>Cotización</h1>
      </div>
      <div class="container">
        <form @submit.prevent="calcularPrecioVenta">
          <div class="tiempo">
            <label>Horas: </label>
            <input v-model.number="hor" type="number" step="any" required>
            <label>Minutos: </label>
            <input v-model.number="min" type="number" step="any" required>
          </div>
          <div>
            <label>Peso de lana comprada: </label>
            <input v-model.number="pesolanaC" type="number" step="any" required>
          </div>
          <div>
            <label>Costo de lana comprada: </label>
            <input v-model.number="costolanaC" type="number" step="any" required>
          </div>
          <div>
            <label>Peso de lana utilizada: </label>
            <input v-model.number="pesolanaU" type="number" step="any" required>
          </div>
          <div class="accesorios">
            <div v-for="(accesorio, index) in accesorios" :key="index" class="accesorio">
              <input type="number" v-model.number="accesorios[index]">
              <button @click.prevent="eliminarAccesorio(index)">Eliminar</button>
            </div>
            <button @click.prevent="mostrarSubpantalla = true">Agregar Accesorio</button>
            <div v-if="mostrarSubpantalla" class="subpantalla">
              <h2>Agregar Accesorio</h2>
              <input type="number" v-model.number="nuevoAccesorio">
              <button @click.prevent="agregarAccesorio">Agregar</button>
              <button @click.prevent="mostrarSubpantalla = false">Cancelar</button>
            </div>
          </div>
          <div>
            <label>Comisión: </label>
            <input v-model.number="comision" type="number" step="any" required>
          </div>
          <button type="submit" class="calcular-btn">Calcular</button>
        </form>
        <div v-if="resultado !== null" class="resultado">
          <h2>Resultados</h2>
          <p>Total: {{ formatNumber(resultado.total) }}</p>
          <p>Promedio: {{ formatNumber(resultado.promed) }}</p>
          <p>Comisión: {{ formatNumber(resultado.comision) }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        hor: 0,
        min: 0,
        pesolanaC: 0,
        costolanaC: 0,
        pesolanaU: 0,
        accesorios: [],
        nuevoAccesorio: 0,
        mostrarSubpantalla: false,
        comision: 0,
        resultado: null
      };
    },
    methods: {
      calcularPrecioVenta() {
        const datosCalculo = {
          hor: this.hor,
          min: this.min,
          pesolanaC: this.pesolanaC,
          costolanaC: this.costolanaC,
          pesolanaU: this.pesolanaU,
          accesorios: this.accesorios,
          comision: this.comision
        };
  
        axios.post('http://localhost:8082/calculadora/calcular', datosCalculo)
          .then(response => {
            this.resultado = {
              total: response.data.total,
              promed: response.data.promed,
              comision: response.data.comision
            };
          })
          .catch(error => {
            console.error(error);
          });
      },
      agregarAccesorio() {
        if (this.nuevoAccesorio > 0) {
          this.accesorios.push(this.nuevoAccesorio);
          this.nuevoAccesorio = 0;
          this.mostrarSubpantalla = false;
        }
      },
      eliminarAccesorio(index) {
        this.accesorios.splice(index, 1);
      },
      formatNumber(value) {
        return new Intl.NumberFormat('es-CO').format(value);
      }
    }
  };
  </script>
  
  <style scoped>
  .app {
    font-family: Arial, sans-serif;
    color: #333;
  }
  
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
  }
  
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .tiempo,
  .accesorios,
  .subpantalla,
  .resultado {
    margin-bottom: 20px;
  }
  
  input[type="number"] {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  button {
    padding: 10px 20px;
    margin: 8px 5px 4px 0;
    border: none;
    border-radius: 5px;
    background-color: #ff66c4;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #e055a8;
  }
  
  .calcular-btn {
    background-color: #4CAF50;
  }
  
  .subpantalla {
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .resultado {
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  label {
    display: block;
    margin-top: 8px;
    font-weight: bold;
  }
  </style>
  