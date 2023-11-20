<template>
    <div class="container">
    <h1>Cotización</h1>
    <div class="Calc_1">
      <aside class="datecal">
        <label for="Tiempo">Digite tiempo:</label><br>
        <input type="number"><br><br>
        <label for="PesolanaC">Digite peso de lana comprada: </label><br>
        <input type="number"><br><br>
        <label for="PesolanaU">Digite peso de lana utilizada: </label><br>
        <input type="number"><br><br>
        <label for="accesesorios">Accesorios </label><br>
        <input type="button" value="Agregar"><br><br>
        <label for="Comisión">Digite comisión: </label><br>
        <input type="number"><br>
      </aside>
      <section>
        <label for="res">Resultado</label>
      </section>
    </div>
    <div class="botons">
      <input type="submit" value="Clean">
      <input type="submit" value="Calculate">
      <input type="submit" value="Save">
    </div>
  </div>
</template>
