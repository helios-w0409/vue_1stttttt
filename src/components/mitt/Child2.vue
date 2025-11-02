<template>
  <div class="Child">
    <h2>子组件2</h2>
    <h3>自己的电脑：{{ computer }}</h3>
    <h3>组件1发来的数据：{{ toy }}</h3>
    <!-- <h4>向父组件发送电脑数据</h4> -->
    <button @click="emitter.emit('send-computer', computer)">
      点击向父组件发送电脑数据
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emitter from "@/untils/emit";
import { onUnmounted } from "vue";
let computer = ref("笔记本电脑");
let toy = ref("");
//绑定事件
emitter.on("send-toy", (value: any) => {
  toy.value = value;
});
//解绑事件
onUnmounted(() => {
  emitter.off("send-toy");
});
</script>

<style scoped>
.Child {
  background-color: #acac4f; /* 清爽蓝色 */
  padding: 24px;
  border-radius: 12px;
  color: #fff;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  margin-top: 5px;
}
</style>
