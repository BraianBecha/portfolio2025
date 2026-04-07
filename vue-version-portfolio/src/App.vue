



<template>

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Braian Becharouch</title>
    <meta property="og:title" content="Mi Portfolio Web – Braian Becharouch" />
    <meta property="og:description" content="Desarrollador web" />

    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway"> 
     <link rel="icon" type="image/x-icon" href="img/favicon3.png">
</head>

  <header>
   
<nav-component  @navigate="changeSection"  />
     <img  @click="changeSection('projects-component')" class="img-perfil-gato-nav" src="./assets/img/devyaguarete.png" alt="imagen de yaguareté programando confundido">
 
  </header>



<div id="content">

  <saludo-component v-if="secRender === 'projects-component'" /> 


  <section id="section1">

      <component :is="secRender" :arrayCardData="arrayCardData" />
     
  </section>
  
  <section id="section2">
    
  </section>
</div>

<elipse-component />

<side-data-component  @navigate="changeSection" v-if="secRender !== 'blog-component' && secRender !== 'about-component'" />

</template>

<script >

import NavComponent from './components/NavComponent.vue'
import SaludoComponent from './components/SaludoComponent.vue'
import ProjectsComponent from './components/ProjectsComponent.vue'
import ElipseComponent from './components/ElipseComponent.vue'
import AboutComponent from './components/AboutComponent.vue';
import BlogComponent from './components/BlogComponent.vue';
import SideDataComponent from './components/SideDataComponent.vue';


export default {
  name: 'App',
  components: {
    NavComponent,
    SaludoComponent,
    ProjectsComponent,
    ElipseComponent,
    AboutComponent,
    BlogComponent,
    SideDataComponent
  },data() {
    return {

      linkCard: "",
      linkTexto1: "",
      linkArticulo: "",
      secRender : "projects-component",      
      arrayCardData : [
        {
            "cardTitle": "Amazing Flash Gallery",
            "cardDescription": 
            
            `Galería de imágenes por tiempo limitado. 
         Una cuenta regresiva marca el tiempo restante.
        Una vez finalizado, ya no se permiten descargas y aparece un mensaje de agradecimiento por participar. El diseño se adapta a distintos tamaños de pantalla.           
         Técnicamente, es un frontend con Vue.js y Options API. La fecha de finalización se fija en una variable reactiva, de igual manera los textos.
        Una imagen fue generada por IA. 
         El código es mantenible y escalable, con componentes reutilizables y una organización clara.`,
            
         
         "cardTools": ["Vue.js", "Options API", "Diseño Responsivo"],
            "cardImg": "././assets/img/amazing-flash-gallery.png",
            "cardLink": "",
            "backTitle": "Características"
        },
        {
            "cardTitle": "API REST con autenticación",
            "cardDescription": `
            
            API REST con autenticación de usuario mediante usuario y contraseña. 
       
        Cada usuario tiene permisos para acceder a ciertos recursos según sea 'USER', 'ADMIN' o 'DISABLED' para usuarios borrados.
        Los datos de cada usuario se guardan en una base de datos. La contraseña se guarda encriptada para seguridad del usuario.
         La app está pensada para devolver archivos alojados en el mismo servidor.
        
            `,
            "cardTools": ["Spring Security", "BCrypt", "Spring Boot" , "Json Web Token"],
            "cardImg": "",
            "cardLink": "",
            "backTitle": "Características"
        },
        {
            "cardTitle": "Generador de QRs",
            "cardDescription": `
             
         Aplicación de escritorio para crear QR. Una ventana principal contiene el ingreso de datos
         y una segunda muestra una lista de acciones que se ejecutarán todas al tocar un botón. Cada acción resulta en
        uno o más QRs y uno o más archivos. 
     
        Código mantenible y escalable en un MVC + Builder que construye un código QR y lo imprime en PDF digital. 
        La organización de paquetes y clases siguen la convención Maven.       

            `,
            "cardTools": ["Java Swing",  "S.O.L.I.D" , "Librería QR" , "Librería PDF"],
            "cardImg": "",
            "cardLink": "",
            "backTitle": "Características"
        },
        {
            "cardTitle": "CRUD",
            "cardDescription": `
            
         El CRUD típico de un curso de BackEnd. Lo hice en el curso Back-End/Java en Talento Tech. 
       
            `,
            "cardTools": ["Java", "Spring Boot", "Maven" , "Bases de Datos" ],
            "cardImg": "",
            "cardLink": "",
            "backTitle": "Características"
        },
        
        {
            "cardTitle": "Página Web colorida",
            "cardDescription": `
             
         Landing page promocional de un servicio. Simple y rápida, tiene dos secciones y formulario de contacto; modo oscuro y descarga de documentos. Textos de redacción propia, sin IA.
         
         `,
            "cardTools": ["Bootstrap", "FormSpree", "CSS", "HTML" , "CSS" , "JAVASCRIPT"],
            "cardImg": "",
            "cardLink": "",
            "backTitle": "Características"
        },
        {
            "cardTitle": "Servidor Web con Arduino",

            "cardDescription": `Aprovecha la escasa memoria de una placa Arduino Mega 2560 para establecer un servidor Web que devuelva una página con datos de los pines. 
         a fin de mostrar datos útiles de los pines.
          Un script en Java me ayudó a embeber el HTML en C++.`,

            "cardTools": ["Angular", "Arduino JSON", "Arduino Ethernet", "Java" , "HTML" , "CSS", "JavaScript"],
            "cardImg": "",
            "cardLink": "",
            "backTitle": "Características"
        },
        {
            "cardTitle": "Sitio Web de Club deportivo",
            "cardDescription":  `Secciones varias como Institucional, Misión, Próximos Eventos,
          mapas con ubicación. 
          Cronograma con próximos partidos.
          Formulario de registro para nuevos miembros.
          Sección de contacto.
          Documento legal simulado con las reglas del club. `,
            "cardTools": ["React", "JavaScript", "CSS" , "Google Maps " ],
            "cardImg": "",
            "cardLink": "",
            "backTitle": "Características"
        },
        {
            "cardTitle": "Visualizador de imágenes de Marte (de momento no funciona, ver descripción)",
            "cardDescription": `     Este sitio busca y muestra imágenes provistas por la NASA sobre la exploración del suelo marciano en busca de evidencias de vida antigua. 
                          Tiene un formulario de búsqueda donde se puede elegir por día y por misión. 
                         
                          Actualmente no funciona la API encargada de devolver las imágenes. El propietario de la API ha decidido archivarla tras más de 10 años 
                          de servicio, por lo que el proyecto se encuentra en stand by a la espera de una solución.

                        `,
            "cardTools": ["Vue.js", "HTML", "JavaScript", "SCSS"],
            "cardImg": "",
            "cardLink": "",
            "backTitle": "Características"
        },
          {
            "cardTitle": " E-Commerce",
            "cardDescription": ` Una tienda virtual clásica con lista de productos provenientes de una API,
             carrito de compras, cálculo de monto total de la 
             compra y formulario de contacto funcional.`,
            "cardTools": ["HTML", "JavaScript", "FormSpree"],
            "cardImg": "",
            "cardLink": "",
            "backTitle": "Características"
        }
    ]
    }
  
  },
    methods: {
              changeSection(componentname) {
                console.log("changeSection hit with section: " + componentname);
                this.secRender = componentname;
 }
},
 computed: {
   
 }
}


</script>



<style scoped>


</style>
