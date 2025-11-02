<template>
  <div class="Child">
    <h2>子组件1 组件1向组件2传递数据</h2>
    <h3>自己的玩具：{{ toy }}</h3>
    <!-- 点击按钮 向组件2发送数据 -->
    <button @click="emitter.emit('send-toy', toy)">点击发送</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emitter from "@/untils/emit";

//用mitt的方式可以进行任意组件间通信
let toy = ref("玩具车");
</script>

<style scoped>
.Child {
  background-color: #73ac4f; /* 清爽蓝色 */
  padding: 24px;
  border-radius: 12px;
  color: #fff;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
</style>
