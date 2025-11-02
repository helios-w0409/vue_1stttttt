<template>
  <div class="Father">
    <h1>父组件</h1>
    <h2>子组件2发送的电脑数据：{{ computer }}</h2>
    <Child1 />
    <Child2 />
  </div>
</template>

<script setup lang="ts">
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
import emitter from "@/untils/emit";
import { ref } from "vue";
import { onUnmounted } from "vue";
let computer = ref("");
//绑定事件
emitter.on("send-computer", (value: any) => {
  computer.value = value;
});
//解绑事件\
onUnmounted(() => {
  emitter.off("send-computer");
});
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
