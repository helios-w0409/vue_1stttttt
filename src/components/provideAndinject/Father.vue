<template>
  <div class="father">
    <h2>父组件</h2>
    <Child></Child>
    <!-- 对于爷组件传来的值不进行接收。直接传递给子组件 -->
  </div>
</template>

<script setup lang="ts">
import Child from "./Child.vue";
</script>

<style scoped>
.father {
  width: 500px;
  /* margin: 80px auto; */
  padding: 30px 20px;
  background: linear-gradient(135deg, #e0f7fa, #b2ebf2);
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  font-family: "Segoe UI", sans-serif;
  color: #00796b;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* 悬浮时增加立体感 */
.father:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

/* 标题样式 */
.father h2 {
  font-size: 26px;
  margin-bottom: 10px;
  letter-spacing: 1px;
}
</style>
