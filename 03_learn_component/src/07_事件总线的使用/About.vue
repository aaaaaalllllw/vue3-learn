<template>
    <div>
        <button @click="btnClick">按钮点击</button>
    </div>
</template>

<script>
import emitter from './utils/eventbus.js'
    export default {
        methods:{
            btnClick(){
                emitter.emit('why',{name:'coder'})
            }
        }
    }
</script>

<style scoped>

</style>