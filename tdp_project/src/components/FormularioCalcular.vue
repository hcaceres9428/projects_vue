<template>
    <div class="container">
    <h1>Cotización</h1>
    <div class="Calc_1">
      <!-- Campos de entrada -->
      <aside class="datecal">
        <div class="tiempo">
          <label for="Tiempo">Digite tiempo:</label><br><br>
          <label for="Tiempo">Horas: </label><input type="number"  v-model="hor">
          <label for="Tiempo">&ensp;Minutos: </label><input type="number"  v-model="min"><br><br>
        </div>
        <label for="PesolanaC">Digite peso de lana comprada: </label><br>
        <input type="number"   v-model="pesolanaC"><br><br>
        <label for="CostolanaC">Digite costo de lana comprada: </label><br>
        <input type="number"  v-model="costolanaC"><br><br>
        <label for="PesolanaU">Digite peso de lana utilizada: </label><br>
        <input type="number"  v-model="pesolanaU"><br><br>
        <label for="accesorios">Accesorios</label><br>
        <div v-for="(accesorio, index) in accesorios" :key="index">
          <input type="number"  v-model="accesorios[index]">
          <button @click="eliminarAccesorio(index)">Eliminar</button>
        </div>
        <button @click="mostrarSubpantalla = true">Agregar</button>
        <div v-if="mostrarSubpantalla" class="subpantalla">
          <h2>Agregar Accesorio</h2>
          <input type="number"  v-model="nuevoAccesorio">
          <button @click="agregarAccesorio">Agregar</button>
          <button @click="mostrarSubpantalla = false">Cancelar</button>
        </div>
        <label for="comision">Digite comisión: </label><br>
        <input type="number"  v-model="comision"><br>
      </aside>
      <section>
        <label for="res">Resultado: {{ resultado }}</label>
      </section>
    </div>
    <div class="botons">
      <input type="submit" value="Clean">
      <input type="submit" value="Calculate" @click="calcularPrecioVenta">
      <input type="submit" value="Save">
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
      resultado: null, // Inicialmente no hay resultado
    };
  },
  methods: {
    agregarAccesorio() {
      this.accesorios.push(0);
    },
    eliminarAccesorio(index) {
      this.accesorios.splice(index, 1);
    },
    calcularPrecioVenta() {
      const datosCalculo = {
        hor: this.hor,
        min: this.min,
        pesolanaC: this.pesolanaC,
        costolanaC: this.costolanaC,
        pesolanaU: this.pesolanaU,
        accesorios: this.accesorios,
        comision: this.comision
        // Otras propiedades necesarias para la calculadora
      };

      axios.post('http://localhost:8082/calculadora/calcular', datosCalculo)
        .then(response => {
          console.log(response.data);
          this.resultado = response.data.total; // Asegúrate de que 'total' es el campo correcto en la respuesta
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>