<template>
    <div class="app">
        <teleport to="#why">
            <h2>当前计数</h2>
        </teleport>
    </div>
</template>

<script>
    import {created} from 'vue'
    export default {
        created(){
            console.log(this.$name)
        }
    }
</script>

<style scoped>

</style>