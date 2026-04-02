<template>
    
<div class="contenedor-eliptico">
         <img  @click = " emitAboutComponent()" class="img-perfil-gato" src="/../img/devyaguarete.png" alt="imagen de yaguareté programando confundido">
       
        
            <ol class="texto-eliptico">
                
                <li  onclick="mostrarAbout()"> Coder  </li>
                <li> Responsive Web</li>
                <li> Spring Security</li>
                <li> Vue.js </li>
                <li> Java </li>
                <li> Arduino (C++) </li>
                <li>  <a href="https://github.com/BraianBecha"> <i  class="fa-brands fa-github icon"></i> </a>  <a  href="https://www.linkedin.com/in/braian-becharouch-790953a6">  <i  class="fa-brands fa-linkedin icon"></i> </a> </li>
                
                
            </ol>



    </div>

</template>

<script>
export default {
    name: 'SideDataComponent',
    data() {
        return {
            
        }
    },
    methods: {   
        
        emitAboutComponent() {
            console.log("emitAboutComponent hit in sidedatacomponent");
            this.$emit('navigate' , "about-component");
        }

    },
     emits: ['navigate']
}
</script>

<style scoped>

</style>