<template>
    <div class="container">
        <h1>Tabla de Pedidos</h1>
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Detalles</th>
                    <th>Fecha Pedido</th>
                    <th>Fecha Entrega</th>
                    <th>Valor</th>
                    
                </tr>
            </thead>
            <tbody>
              
                    <tr v-for="pedido in pedidos" :key="pedido.codigo">
                    <td>{{ pedido.codigo }}</td>
                    <td>{{ pedido.nombre }}</td>
                    <td>{{ pedido.detalles }}</td>
                    <td>{{ pedido.fPed }}</td>
                    <td>{{ pedido.fEnv }}</td>
                    <td>{{ pedido.valor }}</td>
                </tr>
                   
                <router-view />
            
              
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      pedidos: [],
    };
  },
  methods: {
    obtenerPedidos() {
      // Método para obtener la lista de todos los pedidos
      axios.get("https://tejido-dp-production.up.railway.app/api/pedidos/listar")
      .then((response) => {
        this.pedidos = response.data;
      })
      .catch((error) => {
        console.error("Error", error);
      });
    },
  },
  mounted() {
    // Llamar al método para obtener la lista de pedidos al cargar el componente
    this.obtenerPedidos();
  },
};
</script>