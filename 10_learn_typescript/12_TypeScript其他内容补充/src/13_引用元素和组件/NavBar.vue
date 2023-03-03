<template>
    <div>
        NavBar
        <button @click="getParentAndRoot">获取父组件和根组件</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                message:'navBar里面的message'
            }
        },
        methods:{
            getParentAndRoot(){
                console.log(this.$parent)
                console.log(this.$root)
            }
        }
    }
</script>

<style scoped>

</style>