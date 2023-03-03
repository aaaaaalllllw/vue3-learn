<template>
    <div>
        <h2>{{message}}</h2>
    </div>
</template>

<script>
    export default {
        props:{
            message:{
                type:String
            }
        },
        setup(){
            let counter=100,

            //局部函数
            const increment=()=>{
                counter++;
                console.log(counter)
            }
            return{
                counter,
                increment
            }
        }
    }
</script>

<style scoped>

</style>