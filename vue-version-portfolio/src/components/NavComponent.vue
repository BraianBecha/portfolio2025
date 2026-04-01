<template>
    <div id="menu-p"  >
           <i class="fa-solid fa-ellipsis-vertical" @click="dropDown = !dropDown">  </i>
           </div>
           <div  v-if="dropDown" id="dropdown-m">
            <ol>
                <li v-on:click = "mostrarPrincipal" @click = " changeDropd() ; emitProjectComponent() " >Principal</li>
                <li v-on:click = "mostrarAbout" @click = " changeDropd() ; emitAboutComponent() " > Sobre mí </li>
                <li v-on:click = "mostrarAbout" @click = " changeDropd() ; emitBlogComponent() " > Blog </li>
              
            </ol>
           </div>
           
</template>

<script>
export default {
    name: 'NavComponent',
    data() {
        return {
            activeLink: 'home',
            flag : false,        
            menu : document.getElementById("dropdown-m"),
            dropDown : false
        }
    },
  mounted() {
    
    document.addEventListener('click', this.clickGlobal);
  },
    methods: {            
        emitProjectComponent() {
            console.log("emitProjectComponent hit");
            this.$emit('navigate' , "projects-component");
        },
        
        emitAboutComponent() {
            console.log("emitAboutComponent hit");
            this.$emit('navigate' , "about-component");
        },
        changeDropd(){
            console.log("changeDropd hit");
            this.dropDown = !this.dropDown;
        },
        emitBlogComponent() {
            console.log("emitBlogComponent hit");
            this.$emit('navigate' , "blog-component");
        },
    },
    emits: ['navigate']
}
</script>

<style scoped>
#dropdown-m{    
    z-index: 2;
    position: absolute;
    top: 7rem;
    background-color: var(--color-2);
    border: solid 2px var(--color-dark);
    border-radius: 0.8rem;
    padding: 1rem;
}


#menu-p >i{
   
    font-size: 3rem;
    border-radius: 0.5rem;
    margin: 0.5rem;
    padding: 1rem;
}
#menu-p :hover{
background-color: var(--color-purpura);
}



</style>