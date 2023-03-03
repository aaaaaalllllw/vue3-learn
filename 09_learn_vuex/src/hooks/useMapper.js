import {computed} from 'vue'
import { mapState,useStore,mapGetters } from "vuex"
export function useMapper(mapper,fn){
    //拿到store
    const store=useStore()

      //拿到数据函数
      const storStateFns=fn(mapper)


      //对数据进行转换
      const storeMapper={}
      Object.keys(storStateFns).forEach(fnKey=>{
        const fn=storStateFns[fnKey].bind({$store:store})
        storeMapper[fnKey]=computed(fn)
      })


      return storeMapper
}