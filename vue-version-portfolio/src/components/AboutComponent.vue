 <template>

  <div>   
             <div class="newspaper">
              
        <h1>  Sobre mí  </h1>
  <p> Vivo en Moreno, Buenos Aires. Empecé a aprender Desarrollo Web en el año 2022. Realicé una serie de cursos y amplié lo aprendido en la carrera de Ingeniería en Electrónica Universidad.
    Llevo varios años de aprendizaje constante.  Hago páginas Web, interfaces gráficas con Vue.js, aplicaciones en Java y exploro tecnologías nuevas. 
   
     </p>
     <br>
     
<br>
        <h3>Inglés: </h3>
<p> Soy capaz de mantener conversaciones básicas y leer sin problemas gran variedad de textos, en especial textos técnicos.</p>
  
<br>
<br>

  </div>


<div class="form1">
  <div class="calltoaction">
  <br>
<h3>si crees que puedo ayudarte...</h3>
  <h1>Hablemos: </h1>
  <br> 
  </div>
  
  <form  action="https://formspree.io/f/mjkvvkaj" method="POST" >
    <div>
        <label class="lab-nombre" for="nombre">Nombre</label>
        <input class="inp-nombre" type="text" id="nombre" name="nombre" required>
      </div>
      <div>
        <label class="lab-email" for="email" >Email    </label>
        <input class="inp-email"  type="text" id="email" name="email" required>
      </div>
      <div>
        <label class="lab-mensaje" for="mensaje">Mensaje</label>
        <textarea class="inp-mensaje" id="mensaje" name="mensaje" required  rows="8" cols="35"></textarea>
      </div>
      <button  type="submit" class="button"> <i class="fa fa-paper-plane"></i> Enviar </button>
    </form>
</div>

    
    



  </div>
 </template>


 <style scoped></style>


 <script >
export default {
  name: "AboutComponent",
  data() {
    return {};
  },
};
</script>