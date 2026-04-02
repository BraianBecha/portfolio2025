<template>
    <div >
        <svg class="svg1">    
            <ellipse id="elipse1"
                rx="20vw"
                ry="70vh"
                cx="0"
                cy="50vh"
            />       
        </svg>
    </div>
</template>

<script>
export default {
    name: "ElipseComponent",
    data() {
        return {}
    },
     methods : {
         emitAboutComponent() {
            console.log("emitAboutComponent hit");
            this.$emit('navigate' , "about-component");
        }
    }
}
</script>

<style scoped>
/*

.svg1 {
    height: 150%;
    width: 40vw;
    position: absolute;
}

#elipse1 {
    position: absolute;
    z-index: -1;
    fill: var(--color-2);
}
*/
</style>