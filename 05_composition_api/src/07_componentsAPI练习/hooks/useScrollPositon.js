import { ref } from "vue";

export default function(){
    const scrollX=ref(0)
    const scrollY=ref(0)

    document.addEventListener("scroll",()=>{
        console.log(111)
        console.log(window)
        scrollX.value=window.scrollX
        scrollY.value=window.scrollY
    })
    return{
        scrollX,
        scrollY
    }
}