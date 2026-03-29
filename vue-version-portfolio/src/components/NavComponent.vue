<template>
    <div id="menu-p"  >
           <i class="fa-solid fa-ellipsis-vertical" @click="dropDown = !dropDown">  </i>
           </div>
           <div  v-if="dropDown" id="dropdown-m">
            <ol>
                <li v-on:click = "mostrarPrincipal" @click = "dropDown =! dropDown" >Principal</li>
                <li v-on:click = "mostrarAbout" @click = "dropDown =! dropDown" > Sobre mí </li>
                <li v-on:click = "mostrarAbout" @click = "dropDown =! dropDown" > Otro </li>
                <li v-on:click = "mostrarAbout" @click = "dropDown =! dropDown" > Otro 2 </li>
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
        mostrarPrincipal() {
             console.log("mostrarPrincipal hit");
            this.activeLink = 'home';
            this.$emit('navigate', 'home');
        },
        mostrarAbout() {
            console.log("mostrarAbout hit");
            this.activeLink = 'about';
            this.$emit('navigate', 'about');
        }
    }
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