<template>
  <div class="Child">
    <h2>子组件</h2>
    <h3>孩子的玩具：{{ toy }}</h3>
    <h3>父亲给的汽车：{{ car }}</h3>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const toy = ref("toy");

// 接收父组件传递的参数
defineProps(["car"]);
</script>

<style scoped>
.Child {
  background-color: #4dabf7; /* 清爽蓝色 */
  padding: 24px;
  border-radius: 12px;
  color: #fff;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}
</style>
