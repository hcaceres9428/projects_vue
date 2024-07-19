<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="contenido">
      <section>
        <article>
          <router-link to="/Clientes">
            <img src="../assets/equipo-de-usuario.png" alt="Clientes">
            <br>Clientes
          </router-link>
        </article>
        <article>
          <router-link to="/pedidos">
            <img src="../assets/caja.png" alt="Pedidos">
            <br>Pedidos
          </router-link>
        </article>
        <article>
          <router-link to="/Calcular">
            <img src="../assets/calculadora.png" alt="Calculadora">
            <br>Calculadora
          </router-link>
        </article>
      </section>
    </div>
    <footer>
      <h1>C3</h1>
    </footer>
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

<style scoped>
/* Estilos generales */
body {
  font-family: Arial, Helvetica, sans-serif;
  background-color: #f9f9f9;
  color: #333;
  margin: 0;
  padding: 0;
}

/* Estilos del contenedor principal */
.hello {
  text-align: center;
  padding: 20px;
}

/* Estilos del encabezado */
h1 {
  color: #ff66c4;
  margin-bottom: 20px;
}

/* Estilos del contenido */
.contenido {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Estilos de los artículos */
article {
  background-color: #fff;
  border: 2px solid #ff66c4;
  border-radius: 10px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

article:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Estilos de los enlaces */
a {
  font-size: 1.2em;
  color: #ff66c4;
  text-decoration: none;
}

a:hover {
  color: #e055a8;
}

/* Estilos de las imágenes */
.contenido img {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
}

.contenido img:hover {
  transform: rotate(10deg);
}

/* Estilos del pie de página */
footer {
  margin-top: 20px;
}

footer h1 {
  color: #ff66c4;
}
</style>
