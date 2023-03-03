<script>
  import HelloWorld from './HelloWorld.vue'  
  import {h} from 'vue'
  export default {
    render(){
      return h(HelloWorld,{},{
        default :props=>h("span",null,"app传入到HelloWorld中的内容")
      })
    }
}
</script>

<style>

</style>
 