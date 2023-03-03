<template>
    <div>
        <!-- <input type="text" v-model="message">
        <input type="text"  :value="message" @input="message=$event.target.value "> -->
        <h3>{{message}}</h3>

        <!-- 组件上使用v-model -->
         <hi-input v-model="message"></hi-input>
         <!-- <hi-input :modleVale="message" @update:model-Value="message=$event"></hi-input> -->
    </div>
</template>

<script>
import HIInput from './HlInput.vue'
    export default {
        components:{
            HIInput
        },
        data(){
            return{
                message:'Hello World'
            }
        }
    }
</script>

<style scoped>

</style>