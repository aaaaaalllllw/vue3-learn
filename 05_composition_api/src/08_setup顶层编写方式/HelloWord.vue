<template>
    <div>
        helloworld
        <p>{{message}}</p>
        <button @click="emitEvent">发射事件</button>
    </div>
</template>

<script setup>
    import {defineProps,defineEmit} from 'vue'


    const props=defineProps({
        message:{
            type:String,
            default:"哈哈哈"
        }
    })

    const emit=defineEmit(['incremnet','decrement'])
    const emitEvent=()=>{
        emit('increment','1000')
    }
</script>

<style lang="scss" scoped>

</style>