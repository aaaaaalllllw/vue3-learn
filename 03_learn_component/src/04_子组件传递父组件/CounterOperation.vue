<template>
  <div>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="incrementN">+n</button>
  </div>
</template>

<script>
export default {
    emits:["add","sub","addN"],
  methods: {
    increment() {
      console.log("+1");
      this.$emit("add")
    },
    decrement() {
      console.log("-1");
      this.$emit("sub")
    },
    incrementN(){
        this.$emit('addN',2,"why",18)
    }
  },
};
</script>

<style scoped>
</style>