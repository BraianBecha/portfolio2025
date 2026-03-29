<template>
  <div class="card" >
                
                <div class="card-front">
                    <div class="card-img">
                        <img src="" alt="project-Img">
                    </div> 

                    <div class="card-title">
                    Amazing Flash Gallery
                    </div>
                    <div class="card-tools">
                      <div>Vue.js</div> <div>Options API</div> <div>Imágenes con IA</div>  <div>Responsive Design</div>
                    </div> 
                    
                    <p style="color:rgb(43, 223, 67); padding: 1em;">ver más...</p>

                </div>

                 <div class="card-back">
                    <h4>Características</h4><br>
                    <p> 

            Galería de imágenes por tiempo limitado. <br>         
         Una cuenta regresiva marca el tiempo restante.
        Una vez finalizado, ya no se permiten descargas y aparece un mensaje de agradecimiento por participar. El diseño se adapta a distintos tamaños de pantalla. <br>          
         Técnicamente, es un frontend con Vue.js y Options API. La fecha de finalización se fija en una variable reactiva, de igual manera los textos.
        Una imagen fue generada por IA. <br>
         El código es mantenible y escalable, con componentes reutilizables y una organización clara.

        </p>
                  
                     <a href="https://braianbecha.github.io/galeria-de-memes/"> Acceder </a>
                    
                </div>

            </div> 

             <div class="card" >
                
                <div class="card-front">
                    <div class="card-img">
                        <img src="" alt="project-Img">
                    </div> 

                    <div class="card-title">
                    API REST con autenticación
                    </div>
                    <div class="card-tools">
                      <div>Spring Security</div> <div>BCrypt</div>   <div>Spring Boot</div>  <div>Json Web Token</div> 
                    </div> 
                    
                    <p style="color:rgb(43, 223, 67); padding: 1em;">ver más...</p>

                </div>

                 <div class="card-back">
                    <h4>Características</h4><br>
                    <p> 
            API REST con autenticación de usuario mediante usuario y contraseña. <br>  
        <br>
        Cada usuario tiene permisos para acceder a ciertos recursos según sea 'USER', 'ADMIN' o 'DISABLED' para usuarios borrados.
        Los datos de cada usuario se guardan en una base de datos. La contraseña se guarda encriptada para seguridad del usuario. <br>
         La app está pensada para devolver archivos alojados en el mismo servidor.<br>
        </p>
                  
                     <a href="https://github.com/BraianBecha/spring-security-server">Repo</a>
                    
                </div>




            </div> 


</template>

<script>
export default {
    name: 'ProjectsComponent',
    data() {
        return {
            
        }
    },
    methods: {       
       
    }
}
</script>

<style scoped>
</style>