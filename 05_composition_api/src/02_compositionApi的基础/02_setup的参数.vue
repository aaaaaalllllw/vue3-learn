<template>
    <div>
        <home :message="'home'" id="aa" class="bb"></home>
    </div>
</template>

<script>
import Home from './Home.vue'
    export default {
        components:{
            Home
        },
        // setup(props,context){
        //     console.log(props.message)
        //     console.log(context.attrs.id)
        //     console.log(context.slots)
        //     console.log(context.emit)
        // }
        setup(props,{attrs,slot,emit}){
            console.log(attrs);
            console.log(slot)
            console.log(emit)
        }
       
    }
</script>

<style scoped>

</style>