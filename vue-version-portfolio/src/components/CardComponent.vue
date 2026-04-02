<template>
      <div class="card" :class="{ 'flipped': isFlipped }">
                
                <div v-on:click="flipCard" class="card-front">
                    <div class="card-img">
                        <img v-bind:src="cardImg" alt="imagen muestra captura de un ecomerce">
                    </div> 

                     <div class="card-title">
                    {{ cardTitle }}
                    </div>
                    <div class="card-tools" >

                        <div v-for="x in cardTools" :key="x"> {{ x }}</div>
                    </div>    
                     <p style="color:rgb(43, 223, 67); padding: 1em;">ver más...</p>          

                </div>

                 <div v-on:click="flipCard" class="card-back">
                    <h4> {{ backTitle}}</h4> <br>
                    <p> {{  cardDescription }} </p>
                 
                    <a href="{{ cardLink }}"> Acceder </a>
                </div>
                    

            </div> 

</template>

<script>
export default {
    name: 'CardComponent',
    data() {
        return {
            isFlipped: false
        }
    }, props: { 
        "cardTitle": String,
        "cardTools": {
        type: Array,
        default: () => []  
    },
        "cardDescription": String,
        "cardImg": String,
        "cardLink": String,
        "backTitle": String
    },
    
         methods:{
            flipCard(){               
                this.isFlipped = !this.isFlipped;
            }
        
        
        },

    mounted() {
       
        
    }
    
    }

</script>
<style scoped>


</style>