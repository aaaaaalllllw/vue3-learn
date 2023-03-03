function createApp(rootComponent){
    return{
        mount(selector){
            const container=document.querySelector(selector)
            //初始
            let isMounted=false
            let oldVnode=null

            // if(!isMounted){
            //     mount(rootComponent.render(),container)
            // }
            watchEffect(function(){
                if(!isMounted){
                    oldVnode=rootComponent.render()
                    mount(rootComponent.render(),container)
                    isMounted=true
                }else{//更新操作
                    const newVnode=rootComponent.render()
                    patch(oldVnode,newVnode)
                     oldVnode=newVnode
                }
            })
        }
    }
}