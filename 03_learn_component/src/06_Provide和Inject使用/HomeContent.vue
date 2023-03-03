<template>
    <div>
        homeconent:{{name}}--{{age}}
    </div>
</template>

<script>
    export default {
        inject:['name','age']
    }
</script>

<style scoped>

</style>