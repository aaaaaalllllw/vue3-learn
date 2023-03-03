<template>
  <div>
   <suspense>
    <template #default>
         <async-category></async-category>
    </template>
    <template #fallback>
        <loading></loading>
    </template>
   </suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Loading from './Loading.vue'
import Loading from './Loading.vue';
// import AsyncCategory from './AsyncCategory.vue'
// const AsyncCategory = defineAsyncComponent(() => import("./AsyncCategory.vue"));
const AsyncCategory=defineAsyncComponent({
    loader:()=>import ("./AsyncCategory.vue"),
    //占位组件
    loadingComponent:Loading,
    //erroCompoment 没有成功展示的组件
    //在显示loadingcomponents组件之前，等待多长事件
    delay:2000,
    /***
     * err:错误信息
     * retry：函数，调用retry尝试重新加载
     * attempts:记录尝试的次数
     */
    onError:function(err,retry,attempt){

    }
})
export default {
  components: { AsyncCategoryLoading },
};
</script>

<style scoped>
</style> 