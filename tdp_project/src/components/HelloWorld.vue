<template>

  <fieldset>
    <legend> HC Programer </legend>
    <header>

      <img src="../assets/Log-HC.png" alt="Logo_Developer">

    </header>
    <div class="hello">
      
      <h1>{{ msg }}</h1>
      <div class="contenido">
        
        <section>
            <article>
                <router-link to="/Clientes"><img src="../assets/equipo-de-usuario.png" alt="Price">
                <br>Clientes</router-link>
            </article>
            
            
        </section>

      </div>
      <footer><h1>C3</h1></footer>
    </div>
  </fieldset>
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
  color: #5442b9;
}
.contenido{
    display: grid;
    grid-template-columns: 1fr 2fr;
   grid-auto-rows: 1fr;
}
legend{
  text-align: left;
}
header img{
    height: 45px;
    width: 100px; 
    padding-right: 1230px;
}
</style>

