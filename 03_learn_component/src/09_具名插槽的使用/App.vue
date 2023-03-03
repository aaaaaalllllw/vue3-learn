<template>
    <div>
        <nav-bar :name="name"> 
            <template v-slot:left>
                <button>左边按钮</button>
            </template>
            <template v-slot:center>
                <h2>我是标题</h2>
            </template>
            <template #right>
                <button>右边按钮</button>
            </template>
            <template v-slot:[name]>
                why
            </template>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
    export default {
        components:{
            NavBar
        },
        data(){
            return{
                name:'wht'
            }
        }
    }
</script>

<style scoped>

</style>