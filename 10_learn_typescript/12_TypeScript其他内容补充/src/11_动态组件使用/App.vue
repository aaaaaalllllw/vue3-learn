<template>
  <div>
    <button
      v-for="item in tabs"
      :key="item"
      @click="itemClick(item)"
      :class="{ active: currentTab === item }"
    >
      {{ item }}
    </button>

    <!-- 2.动态组件 -->
    <keep-alive>
      <component
        v-bind:is="currentTab"
        name="coderwhy"
        :age="18"
        @pageClick="pageClick"
      ></component>
    </keep-alive>
    <!-- 1.通过v-if实现 -->
    <!-- <template v-if="currentTab=='home'">
            <home></home>
        </template>
        <template  v-else-if="currentTab=='about'" >
            <about></about>
        </template>
        <template v-else>
            <category></category>
        </template> -->
  </div>
</template>

<script>
import About from "./pages/About.vue";
import Home from "./pages/Home.vue";
import Category from "./pages/Category.vue";

export default {
  components: { About, Home, Category },
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentTab: "home",
    };
  },
  methods: {
    itemClick(item) {
      this.currentTab = item;
    },
    pageClick() {
      console.log("page内部");
    },
  },
};
</script>

<style scoped>
.active {
  color: red;
}
</style>