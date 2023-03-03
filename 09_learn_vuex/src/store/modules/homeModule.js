const homeModule={
    namespaced:true,
    state(){
        return{
            homeCounter:100
        }
    },
    getters:{
        dbCounter(state,getters){
            return state.homeCounter*2
        }
    },
    mutations:{

    },
    actions:{
        incrementAction({commit,dispatch,state,getters,rootGetters}){
            commit("increment",null,{root:true})
        }
    }
}

export default homeModule