<template>
    <div>
     <show-names :names="names">
        <template v-slot="slotProps">
             <button>{{slotProps.item}}
                --{{slotProps.index}}
             </button>
        </template>
     </show-names>
    </div>
</template>

<script>
import ChildCpn from './ChildCpn.vue'
import ShowNames from './ShowNames.vue'

    export default {
        components:{
            ChildCpn,
                ShowNames
        },
        data(){
            return{
                names:['nbc','cba','nba']
            }
        }
    }
</script>

<style scoped>

</style>