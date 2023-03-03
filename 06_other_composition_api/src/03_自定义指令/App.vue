<template>
    <div>
        <div v-format-time>{{timestamp}}</div>
    </div>
</template>

<script>
    import {ref,onMounted} from 'vue'
    export default {
    
        setup(){
           const timestamp=1111111111111
           return {
            timestamp
           }
        }
    }
</script>

<style scoped>

</style>