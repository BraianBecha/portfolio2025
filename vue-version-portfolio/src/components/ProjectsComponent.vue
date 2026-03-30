<template>
<div class="projects">
<card-component :card-title="x.cardTitle" :card-description="x.cardDescription" :card-tools="x.cardTools" :card-img="x.cardImg" :card-link="x.cardLink" :back-title="x.backTitle" v-for="x in arrayCardData" :key="x.cardTitle" />
</div>

</template>

<script>
import CardComponent from './CardComponent.vue'
export default {
    name: 'ProjectsComponent',
    data() {
        return {
            herramiEntas : ['Vue.js', 'Options API', 'Imágenes con IA', 'Responsive Design']
        }
    },
    methods: {       
    },
    components: {
        CardComponent
    },
    mounted() {
        console.log("ProjectsComponent mounted");
        console.log("herramiEntas es: " + this.herramiEntas[1]);
    },
    
    props :{
        "arrayCardData" : Array
    }
}
</script>

<style scoped>
</style>