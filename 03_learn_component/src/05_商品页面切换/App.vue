<template>
    <div>
        <table-control :titles="titles" @titleClick="click"></table-control>
        <h2>{{content[currentIndex]}}</h2>
    </div>
</template>

<script>
import TableControl from './TabControl.vue'
    export default {
        components:{
            TableControl
        },
        data(){
            return{
                titles:['衣服','鞋子','化妆'],
                content:['衣服页面','鞋子页面','化妆页面'],
                currentIndex:0
            }
        },
        methods:{
            click(index){
                this.currentIndex=index
            }
        }
    }
</script>

<style scoped>

</style>