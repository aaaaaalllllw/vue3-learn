

<script>
    import { h} from "vue";
    export default {
        render(){
            return h('div',null,[
                h('h2',null,"helloworld"),
                this.$slots.default?this.$slots.default():h("span",null,'我是HelloWorld的默认插槽')
            ])
        }
    }
</script>

<style scoped>

</style>