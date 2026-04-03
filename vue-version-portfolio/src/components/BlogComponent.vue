<template>
    <article class="blog-article" v-for="x in arrayArticleData" :key="x.artTitle">
        <br>
        <h2> {{ x.artTitle }} </h2>
        <br><br>
        <img v-bind:src="x.artImg" alt="imagen muestra captura de un ecomerce">
        <br><br>
        
        <div v-for="y in x.artText" :key="y"> <p> {{ y }} </p> <br> </div>
    </article>
    
  
</template>


<script>


export default {
    name: "BlogComponent",
    data() {
        return {
            arrayArticleData : [
        {
            "artTitle": "Amazing Flash Gallery",
            "artText":  [           
            `Galería de imágenes por tiempo limitado. 
         Una cuenta regresiva marca el tiempo restante.
        Una vez finalizado, ya no se permiten descargas y aparece un mensaje de agradecimiento por participar. El diseño se adapta a distintos tamaños de pantalla.           
         Técnicamente, es un frontend con Vue.js y Options API. La fecha de finalización se fija en una variable reactiva, de igual manera los textos.
        Una imagen fue generada por IA. 
         El código es mantenible y escalable, con componentes reutilizables y una organización clara.` ,
                   
            `Galería de imágenes por tiempo limitado. 
         Una cuenta regresiva marca el tiempo restante.
        Una vez finalizado, ya no se permiten descargas y aparece un mensaje de agradecimiento por participar. El diseño se adapta a distintos tamaños de pantalla.           
         Técnicamente, es un frontend con Vue.js y Options API. La fecha de finalización se fija en una variable reactiva, de igual manera los textos.
        Una imagen fue generada por IA. 
         El código es mantenible y escalable, con componentes reutilizables y una organización clara.`,
                   
            `Galería de imágenes por tiempo limitado. 
         Una cuenta regresiva marca el tiempo restante.
        Una vez finalizado, ya no se permiten descargas y aparece un mensaje de agradecimiento por participar. El diseño se adapta a distintos tamaños de pantalla.           
         Técnicamente, es un frontend con Vue.js y Options API. La fecha de finalización se fija en una variable reactiva, de igual manera los textos.
        Una imagen fue generada por IA. 
         El código es mantenible y escalable, con componentes reutilizables y una organización clara.`
        ,
               
            `Galería de imágenes por tiempo limitado. 
         Una cuenta regresiva marca el tiempo restante.
        Una vez finalizado, ya no se permiten descargas y aparece un mensaje de agradecimiento por participar. El diseño se adapta a distintos tamaños de pantalla.           
         Técnicamente, es un frontend con Vue.js y Options API. La fecha de finalización se fija en una variable reactiva, de igual manera los textos.
        Una imagen fue generada por IA. 
         El código es mantenible y escalable, con componentes reutilizables y una organización clara.`],
                     
          "artImg": "././assets/img/amazing-flash-gallery.png",
            
        },
        {
            "artTitle": "Amazing Flash Gallery",
            "artText":  [           
            `Galería de imágenes por tiempo limitado. 
         Una cuenta regresiva marca el tiempo restante.
        Una vez finalizado, ya no se permiten descargas y aparece un mensaje de agradecimiento por participar. El diseño se adapta a distintos tamaños de pantalla.           
         Técnicamente, es un frontend con Vue.js y Options API. La fecha de finalización se fija en una variable reactiva, de igual manera los textos.
        Una imagen fue generada por IA. 
         El código es mantenible y escalable, con componentes reutilizables y una organización clara.` ,
                   
            `Galería de imágenes por tiempo limitado. 
         Una cuenta regresiva marca el tiempo restante.
        Una vez finalizado, ya no se permiten descargas y aparece un mensaje de agradecimiento por participar. El diseño se adapta a distintos tamaños de pantalla.           
         Técnicamente, es un frontend con Vue.js y Options API. La fecha de finalización se fija en una variable reactiva, de igual manera los textos.
        Una imagen fue generada por IA. 
         El código es mantenible y escalable, con componentes reutilizables y una organización clara.`,
                   
            `Galería de imágenes por tiempo limitado. 
         Una cuenta regresiva marca el tiempo restante.
        Una vez finalizado, ya no se permiten descargas y aparece un mensaje de agradecimiento por participar. El diseño se adapta a distintos tamaños de pantalla.           
         Técnicamente, es un frontend con Vue.js y Options API. La fecha de finalización se fija en una variable reactiva, de igual manera los textos.
        Una imagen fue generada por IA. 
         El código es mantenible y escalable, con componentes reutilizables y una organización clara.`
        ,
               
            `Galería de imágenes por tiempo limitado. 
         Una cuenta regresiva marca el tiempo restante.
        Una vez finalizado, ya no se permiten descargas y aparece un mensaje de agradecimiento por participar. El diseño se adapta a distintos tamaños de pantalla.           
         Técnicamente, es un frontend con Vue.js y Options API. La fecha de finalización se fija en una variable reactiva, de igual manera los textos.
        Una imagen fue generada por IA. 
         El código es mantenible y escalable, con componentes reutilizables y una organización clara.`],
                     
        "artImg": "././assets/img/amazing-flash-gallery.png",
            
        }
          ]  
        }
    }
}
</script>


<style scoped>
article{
   background: #d9d0d0;
background: linear-gradient(90deg, rgb(204, 197, 197) 0%, rgba(255, 248, 248, 1) 50%, rgb(241, 223, 211) 100%);
    padding: 1em;
    margin: 1em;
    border-radius: 0.5rem;
}
</style>
