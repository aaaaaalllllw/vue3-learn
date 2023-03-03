<template>
    <div>
      
    </div>
</template>

<script>
import emitter from './utils/eventbus'
    export default {
        created(){
            emitter.on('why',(info)=>{
                console.log(info)
            })
        }
    }
</script>

<style scoped>

</style>