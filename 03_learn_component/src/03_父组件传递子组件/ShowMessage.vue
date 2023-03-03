<template>
    <div>
        <h2 :class="$attrs.class">{{title}}</h2>
        <p>{{content}}</p>
    </div>
</template>

<script>
    export default {
        // props:['title','content']
        inheritAttrs:false,    
        props:{
            title:String,
            content:{
                type:String,
                required:true,
                default:'123'
            },
            info:{
                type:Object,
                default(){
                    return   {name:'wht'}
                }
            }
        }
    }
</script>

<style scoped>

</style>