<template>
    <div>
        <button v-why.aaa.bb="why" @click="increment">点击</button>
    </div>
</template>

<script>
    import {ref,onMounted} from 'vue'
    export default {
        //局部指令 
        directives:{
           why:{
            created(el,bindings,vnode,preVonde){
                console.log(el,bindings,vnode,preVonde)
                 console.log(bindings.value)
                console.log("why create")
            },
            beforeMount(){
                  console.log("why beforeMount")
            },
            beforeUpdate(){

            },
            updated(){

            },
            beforeUnmount(){

            },
            unmounted(){

            }
           }
        },
        setup(){
            const counter=ref(0)
            const increment=()=>counter.value++
            return{
                counter,
                increment
            }
        }
    }
</script>

<style scoped>

</style>