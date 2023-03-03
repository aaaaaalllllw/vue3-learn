<template>
    <div>
        <!-- <button @click="btnClick">hyinput按钮</button>
        <h2>{{modelValue}}</h2> -->
        <input type="text" :value="modelValue" @input="btnClick">
    </div>
</template>

<script>
    export default {
         props:{
            modelValue:String          
         },
         emits:["update:modelValue"],
         methods:{
            btnClick(){
                 this.$emit('update:modelValue','111')
            }
         }
    }
</script>

<style scoped>

</style>