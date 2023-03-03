<template>
    <div>
        {{data}}
       <HelloWorld message="呵呵呵" @increment="getCounter"> </HelloWorld>
    </div>
</template>

<script setup>
import HelloWorld from './HelloWord.vue'
import {ref} from 'vue'
 
const data=ref(0)

const getCounter=(payload)=>{
    console.log(payload);
}
  </script>

<style scoped>

</style>