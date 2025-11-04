<template>
  <div class="child1">
    <h2>子组件1</h2>
    <h2>玩具：{{ toy }}</h2>
    <h2>书籍：{{ book }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const toy = ref("玩具车");
const book = ref("故事书");
//允许父组件访问
defineExpose({ toy, book });
</script>

<style scoped>
.child1 {
  width: 320px;
  margin: 20px auto;
  padding: 16px;
  text-align: center;
  border-radius: 14px;
  background: linear-gradient(135deg, #ffe4b5, #fff8dc);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.child1:hover {
  transform: translateY(-5px);
}

.child1 h2 {
  color: #e67e22;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.5px;
}
</style>
