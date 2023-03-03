<template>
    <div>
        <input type="text" v-focus/>
    </div>
</template>

<script>
    import {ref,onMounted} from 'vue'
    export default {
        //局部指令 
        directives:{
            focus:{
                mouted(el,bindings,vnode,preVonde){
                    console.log('focus mounted')
                    el.focus()
                }
            }
        }
    }
</script>

<style scoped>

</style>