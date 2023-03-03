<template>
    <div>

    </div>
</template>

<script>
    import {inject}  from 'vue'
    export default {
        setup(){
            console.log(inject('name'))
        }
    }
</script>

<style lang="scss" scoped>

</style>