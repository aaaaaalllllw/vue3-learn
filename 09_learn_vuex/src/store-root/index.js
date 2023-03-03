import { createStore } from "vuex";

const store=createStore({
    state(){
        return{
            counter:100,
            age:18,
            books:[
                {name:"vue1",price:200,count  :3},
                {name:"vue2",price:400,count:5},
                {name:"vue3",price:2010,count:1}
            ],
            discount:0.6
        }
    },
   mutations:{
    decrement(state){
        state.counter--
    },
    increment(state){
        state.counter++
    },
    incrementN(state,payload){
        state.counter+=payload
    }
   },

   getters: {
    totalPrice(state,getters){
        let totalPrice=0
        for(const book of state.books){
            totalPrice+=book.price*book.count
        }
    return totalPrice*getters.currentDiscount
    },
    currentDiscount(state){
        return state.discount*0.8
    },
    totalPriceCreaterN(state,getters){
        return function(n){
            let totalPrice=0
            for(const book of state.books){
              if(n<=book.count) continue
              totalPrice+=book.price*book.count 
            }
            return totalPrice
        }
    }
   }
})



export default store