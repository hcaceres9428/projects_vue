<template>
    
    <div class="hello">
      
      <h1>{{ msg }}</h1>
      <div class="contenido">
        
        <section>
            <article>
                <router-link to="/Clientes"><img src="../assets/equipo-de-usuario.png" alt="Price">
                <br>Clientes</router-link>
            </article>
            <article>
                <router-link to="/pedidos"><img src="../assets/caja.png" alt="Price">
                <br>Pedidos</router-link>
            </article>
            <article>
                <router-link to="/Calcular"><img src="../assets/calculadora.png" alt="Price">
                <br>Calculadora</router-link>
            </article>
            
            
        </section>

      </div>
      <footer><h1>C3</h1></footer>
    </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  font-family: Arial, Helvetica, sans-serif;
  font-size: x-large;
  text-decoration: none;
  color: #ff66c4;
}
.contenido{
  display: grid;
    display: block;
    text-align: center;
    grid-template-columns: 1fr 1fr ;
    width: 70%; /* Ajusta el ancho del fondo Calc_1 */
    margin: 0 auto; /* Centra horizontalmente */
    padding: 20px; /* Ajusta el relleno según sea necesario */
}
.contenido img{
  height: 150px;
  width: 150px;
}
article{
    border-style: solid;
    border-color: #fff3f3;
    display: inline-block;
    margin-left: 20px;
}
</style>
