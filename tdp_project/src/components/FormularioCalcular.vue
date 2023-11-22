<template>
    <div class="container">
    <h1>Cotización</h1>
    <div class="Calc_1">
      <aside class="datecal">
        <div class="tiempo">
        <label for="Tiempo">Digite tiempo:</label><br><br>
        <label for="Tiempo">Horas: </label><input type="number">
        <label for="Tiempo">&ensp;Minutos: </label>
        <input type="number"><br><br>
        </div>
        <label for="PesolanaC">Digite peso de lana comprada: </label><br>
        <input type="number"><br><br>
        <label for="CostolanaC">Digite costo de lana comprada: </label><br>
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
