import { customRef } from "vue";
//自定义ref 
export default function(value){
    let timer=null
    return customRef((track,trigger)=>{
        return{
            get(){
                //收集依赖
                track();
                return value
            },
            set(value){
                clearTimeout(timer)
               timer=setTimeout(() => {
                value=newValue
                trigger()
               }, 1000);
            }
        }
    })
}