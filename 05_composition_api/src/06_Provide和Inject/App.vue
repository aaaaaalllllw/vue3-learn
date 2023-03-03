<template>
    <div>
        <home></home>
    </div>
</template>

<script>
    import Home from './Home.vue'
    import {provide} from 'vue'
    export default {
        components:{
            Home
        },
        setup(){
            let name='coder'
            let age=19
            provide('name',name)
            provide('age',age)
        }
    }
</script>

<style scoped>

</style>