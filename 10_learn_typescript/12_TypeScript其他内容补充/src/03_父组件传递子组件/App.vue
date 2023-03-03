<template>
  <div>
    <show-message title="哈哈哈哈" content="哈哈哈哈哈" class="wht"></show-message>
    <show-message title="xxxxx" content="xxxxx"></show-message>
    <show-message :title="title" :content="content"></show-message>
    <show-message :title="message.title" :content="message.content"></show-message>
    <show-message v-bind="message"></show-message>
  </div>
</template>

<script>
import ShowMessage from "./ShowMessage.vue";

export default {
  components: { ShowMessage },
  data(){
    return {
        title:'嘿嘿嘿',
        content:'嘿嘿嘿',
        message:{
            title:'啵啵啵',
            content:'啵啵啵'
        }
    }
  }
};
</script>

<style scoped>
</style>