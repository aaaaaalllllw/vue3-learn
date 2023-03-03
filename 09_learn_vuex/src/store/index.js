import { createStore } from "vuex";
import home from './modules/homeModule'
import user from './modules/userModule'
const store=createStore({
    state(){
        return{
            rootCounter:0 
        }
    },
   modules:{
    home,
    user
   }
})



export default store