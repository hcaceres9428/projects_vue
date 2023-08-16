<template>
    <div class="cliente">
        <div class="components">
       <FormularioPedido/>

        </div>
    </div>
</template>

<script>
import FormularioPedido from "@/components/FormularioPedido.vue";



export default {
name: 'PedidosView',

  components: {
    FormularioPedido,
    
    }
}
</script>