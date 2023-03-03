<template>
    <div>
        <h3>{{fullName}}</h3>
    </div>
</template>

<script>
    import {ref,computed} from 'vue'
    export default {
        setup(){
            const firtName=ref("kobe")
            const lastName=ref('Bryant')

            // 1.用法一:传入一个getter函数
            //computed返回一个ref对象
            // const fullName=computed(()=>{
            //     firtName.value+lastName.value
            // })

            //2.用法二：传入一个对象，对象包含getter/setter
            const fullName=computed({
                get:()=>firtName.value+" "+lastName.value,
                set(newValue){
                    const names=newValue.split(" ")
                    firtName.value=names[0]
                    lastName.value=names[1]
                }
            })

            return{
            fullName
        }
        }
        
    }
</script>

<style lang="css" scoped>

</style>