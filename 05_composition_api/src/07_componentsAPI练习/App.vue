<template>
    <div>
        <div class="content"></div>
        <div class="scroll">
            <div class="scroll-x">
                scrollX:{{scrollX}}
            </div>
            <div class="scroll-y">
                scrollY:{{scrollY}}
            </div>
            <div>
                {{data}}
            </div>
        </div>
    </div>
</template>

<script>
  import{   useTitle,
    useScrollPostion,
    useMousePostion,
    userLocalStorage} from './hooks/index'
    export default {
        setup(){
            const titleRef=useTitle('coderwhy')

            //title
            setTimeout(()=>{
                titleRef.value="kobe"
            },3000)


            //滚动位置
            const {scrollX,scrollY}=useScrollPostion()

            //存储
            const data=userLocalStorage('info',{name:'why',age:19})
              return{
                scrollX,
                scrollY,
                data
              }
        }
      
    }
</script>

<style scoped>
    .content{
        width: 3000px;
        height: 3000px;
    }
    .scroll{
        position: fixed;
        bottom: 30px;
        right: 30px;
    }
</style>