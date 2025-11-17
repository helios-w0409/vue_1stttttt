<template>
  <div class="pinia">
    <h1>父组件</h1>
    看之前的代码
    <div class="Children1">
      <h2 class="subtitle">子组件1</h2>
    </div>
    <div class="Children2">
      <h2 class="subtitle">子组件2</h2>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* 父组件样式 */
.pinia {
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
.pinia > h1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
}

/* 子组件1样式 */
.Children1 {
  background-color: #4dabf7; /* 蓝色 */
  padding: 24px;
  border-radius: 12px;
  color: #fff;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
}

/* 子组件2样式 */
.Children2 {
  background-color: #ffd54f; /* 黄色 */
  padding: 24px;
  border-radius: 12px;
  color: #333;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

/* 子组件标题 */
.subtitle {
  font-size: 22px;
  margin: 0;
}
</style>
