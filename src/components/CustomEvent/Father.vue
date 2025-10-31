<template>
  <div class="Father">
    <h1>父组件</h1>
    <h2>父亲的汽车：{{ car }}</h2>
    <!-- 给子组件传值 -->
    <Child :car="car"></Child>
  </div>
</template>

<script setup lang="ts">
import Child from "@/components/CustomEvent/Child.vue";
import { ref } from "vue";
//数据
const car = ref("汽车");
</script>

<style scoped>
.Father {
  background-color: #7dd3c6; /* 柔和的红色背景 */
  padding: 40px;
  border-radius: 16px;
  color: white;
  text-align: center;
  /* 阴影 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  /* margin: 60px auto; */
}
</style>
