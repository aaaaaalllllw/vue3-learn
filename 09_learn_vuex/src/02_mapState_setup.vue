<template>
  <div>
   
    <h2>{{sCounter}}</h2>
    <h2>{{name}}</h2>
  </div>

</template>

<script>
import {mapState,useStore} from 'vuex'
 import {computed} from 'vue'
 export default {
    setup(){
      const store=useStore()
      const sCounter=computed(()=>{store.state.counter})


      //这玩意返回的是函数
      const storStateFns=mapState(["counter","age"])
      const storeState={}
      Object.keys(storStateFns).forEach(fnKey=>{
        const fn=storStateFns[fnKey].bind({$store:store})
        storeState[fnKey]=computed(fn)
      })
      return{
        sCounter,
        ...storeState
      }
    }
  }
</script>

<style scoped>

</style>