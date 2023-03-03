<template>
    <div>
        <router-link to="/home">
        <button>首页</button>
        </router-link>
        <router-link to="/about">关于</router-link>
        <router-view to="/user/why"></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>