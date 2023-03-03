<template>
    <div>
        <h2>{{message}}</h2>
        <button @click="foo">点击</button>
    </div>
</template>

<script>
import {demoMixin} from './mixins/demoMixin'
    export default {
        mixins:[demoMixin],
        data(){
            return{
                title:'hello world'
            }
        },
        created(){
            console.log("App created")
        }
    }
</script>

<style scoped>

</style>