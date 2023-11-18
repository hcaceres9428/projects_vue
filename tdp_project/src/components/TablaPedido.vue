<template>
    <div class="container">
        <h1>Tabla de Pedidos</h1>
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Cliente</th>
                    <th>Teléfono</th>
                    <th>Producto</th>
                    <th>Detalles</th>
                    <th>Fecha Pedido</th>
                    <th>Fecha Prospecto</th>
                    <th>Fecha Entrega</th>
                    <th>Valor Prospecto</th>
                    <th>Valor</th>
                    
                </tr>
            </thead>
            <tbody>
              
                    <tr v-for="pedido in pedidos" :key="pedido.codigo">
                    <td>{{ pedido.codigo }}</td>
                    <td>{{ pedido.cliente }}</td>
                    <td>{{ pedido.telefono }}</td>
                    <td>{{ pedido.producto }}</td>
                    <td>{{ pedido.detalles }}</td>
                    <td>{{ pedido.fPed }}</td>
                    <td>{{ pedido.fAprox }}</td>
                    <td>{{ pedido.fEnv }}</td>
                    <td>{{ pedido.valorAprox }}</td>
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
      axios.get("http://localhost:8082/api/pedidos/listar")
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