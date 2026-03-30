



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
   
<nav-component />
    
  </header>



<div id="content">

  <saludo-component /> 


  <section id="section1">

    <div class="projects">
    
   <projects-component :arrayCardData="arrayCardData" />
   
    </div>

  </section>
  
  <section id="section2">
    
  </section>
</div>

<elipse-component />

</template>

<script >
import NavComponent from './components/NavComponent.vue'
import SaludoComponent from './components/SaludoComponent.vue'
import ProjectsComponent from './components/ProjectsComponent.vue'
import ElipseComponent from './components/ElipseComponent.vue'


export default {
  name: 'App',
  components: {
    NavComponent,
    SaludoComponent,
    ProjectsComponent,
    ElipseComponent
  },data() {
    return {
      linkCard: "",
      linkTexto1: "",
      linkArticulo: "",
      
      arrayCardData : [
        {
            "cardTitle": "Proyecto 1",
            "cardDescription": "Descripción del proyecto 1",
            "cardTools": ["Vue.js", "JavaScript", "CSS"],
            "cardImg": "",
            "cardLink": "",
            "backTitle": ""
        },
        {
            "cardTitle": "Proyecto 2",
            "cardDescription": "Descripción del proyecto 2",
            "cardTools": ["React", "JavaScript", "CSS"],
            "cardImg": "",
            "cardLink": "",
            "backTitle": ""
        },
        {
            "cardTitle": "Proyecto 3",
            "cardDescription": "Descripción del proyecto 3",
            "cardTools": ["Angular", "TypeScript", "SCSS"],
            "cardImg": "",
            "cardLink": "",
            "backTitle": ""
        }
    ]
    }
  
  }
 }
</script>



<style scoped>


</style>
