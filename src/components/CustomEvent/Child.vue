<template>
  <div class="Child">
    <h2>子组件</h2>
    <button @click="emit('news', '子组件向父组件发送数据')">发送数据</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits(["news"]);
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
