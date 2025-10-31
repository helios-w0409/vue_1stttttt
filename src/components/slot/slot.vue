<template>
  <div class="slot">
    <h1>父组件</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* 父组件样式 */
.slot {
  background-color: #ff8a65; /* 橙红色 */
  padding: 40px 20px;
  border-radius: 16px;
  color: #fff;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 800px;
  margin: 40px auto;
}

/* 父组件标题 */
.slot > h1 {
  font-size: 28px;
  font-weight: bold;
  margin: 0;
}
</style>
