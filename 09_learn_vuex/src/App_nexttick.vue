<template>
    <div>
       <div class="title" ref="title">
         App_nexttick{{message}}

       </div>
       <button @click="add">点击</button>
    </div>
</template>

<script>
import{ref,nextTick} from 'vue'
    export default {
        setup(){
            const title=ref(null)
            const message=ref("")

            const add=()=>{
                message.value+="哈哈哈哈"
            }
            //更新DOM
            nextTick(()=>{
                console.log(title.value.offsetHeight)
            })
            return{
                title,
                add,
                message
            }
        }
    }
</script>

<style scoped>
    .title{
        width: 120px;
    }
</style>