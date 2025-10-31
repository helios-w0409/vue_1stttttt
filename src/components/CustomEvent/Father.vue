<template>
  <div class="Father">
    <h1>父组件</h1>
    <!-- 在这里展示 子数据-->
    <h2>子数据：{{ msg }}</h2>
    <Child @news="test"></Child>
  </div>
</template>

<script setup lang="ts">
import Child from "@/components/CustomEvent/Child.vue";
import { ref } from "vue";
const msg = ref("");
//父组件获取子组件的数据 子传父 自定义数据
function test(data: string) {
  console.log("测试");
  msg.value = data;
}
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
