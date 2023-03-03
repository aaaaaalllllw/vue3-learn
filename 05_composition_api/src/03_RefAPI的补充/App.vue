<template>
    <div>
        <input type="text" v-model="message">
        <h2>{{message}}</h2>
    </div>
</template>

<script>
    import {ref} from 'vue'
    import deboundRef from './hook/useDebounceRef'
    export default {
        setup(){
            const message=deboundRef('hello World')
        }
       
    }
     return{
         message   
        }
</script>

<style scoped>

</style>