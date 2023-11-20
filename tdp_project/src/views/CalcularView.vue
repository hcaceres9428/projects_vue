
import FormularioCalcular from '@/components/FormularioCalcular.vue';
<template>
    <div class="calcular">
       
       <FormularioCalcular/>
        
    </div>
</template>
<script>
import FormularioCalcular from "@/components/FormularioCalcular.vue";

export default {
name: 'CalcularView',

  components: {
    FormularioCalcular,
}
}
</script>
<style >
.Calc_1 {
    font-size: larger;
    display: grid;
    grid-template-columns: 2fr 4fr;
    border-style: solid;
    border-radius: 12px;
    background-color: #4DF4FF;
    -webkit-text-fill-color: black;
    width: 70%; /* Ajusta el ancho del fondo Calc_1 */
    margin: 0 auto; /* Centra horizontalmente */
    padding: 20px; /* Ajusta el relleno según sea necesario */
}

.datecal{
    text-align: center;
    padding: 3%;
}
input{
    border-radius: 6px;
    width: 50%;
    height: 40px;
}
input[type=submit] {
    background-color: #4DF4FF;
    margin: 20px 10px;
    border-style: solid;
    border-radius: 6px;
    cursor: pointer;
    width: 10%;
    height: 40px;
    font-size: larger;
}
.datecal input[type=button]{
    background-color: #FFF3F3;
    margin: 20px;
    border-style: solid;
    border-radius: 6px;
    cursor: pointer;
    width: 50%;
    height: 40px;
    font-size: large;
}
.botons{
    text-align: right;
}
</style>