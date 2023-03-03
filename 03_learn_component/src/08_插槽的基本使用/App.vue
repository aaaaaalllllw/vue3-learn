<template>
    <div>
        <my-slot-cpn><button>点击</button></my-slot-cpn>
        <my-slot-cpn>我是文本</my-slot-cpn>
        <my-slot-cpn><my-button></my-button></my-slot-cpn>
        <my-slot-cpn>
            <h1>hhhh</h1>
            <h2>kkkkk</h2>
        </my-slot-cpn>
    </div>
</template>

<script>
import MySlotCpn from './MySlotCpn.vue'
import MyButton from  "./MyButton.vue";
    export default {
        components:{
            MySlotCpn,MyButton
        }
    }
</script>

<style scoped>

</style>