import dayjs from "dayjs"

export default function(app){
    app.directive("format-time",{
        create(el,bingdings){
            bingdings.formatString="YYYY-MM-DD HH:mm:ss"
            if(bingdings.value){
                bingdings.formatString=bingdings.value
            }
        },
        mounted(el,bingdings){
            const textContent=el.textContent
            let timestamp=parseInt(textContent)
            if(textContent.length==10){
                timestamp=timestamp*1000
            }
            el.textContent=dayjs(timestamp).format(bingdings.formatString)
        }
    })
}