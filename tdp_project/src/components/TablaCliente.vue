<template>
    <div class="container">
        <h1>Tabla de Clientes</h1>
        <table>
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Telefono</th>
                    <th>Dirección</th>
                    <th>Correo</th>
                    
                </tr>
            </thead>
            <tbody>
              
                    <tr v-for="cliente in clientes" :key="cliente.codigo">
                    <td>{{ cliente.codigo }}</td>
                    <td>{{ cliente.nombre }}</td>
                    <td>{{ cliente.telefono }}</td>
                    <td>{{ cliente.direccion }}</td>
                    <td>{{ cliente.correo }}</td>
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
      clientes: [],
    };
  },
  methods: {
    obtenerClientes() {
      // Método para obtener la lista de todos los clientes
      axios.get("http://localhost:8082/api/clientes/listar")
      .then((response) => {
        this.clientes = response.data;
      })
      .catch((error) => {
        console.error("Error al obtener clientes:", error);
      });
    },
  },
  mounted() {
    // Llamar al método para obtener la lista de clientes al cargar el componente
    this.obtenerClientes();
  },
};
</script>