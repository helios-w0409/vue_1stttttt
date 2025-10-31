<template>
  <div class="mittFather">
    <h1 class="title">mitt的父组件</h1>
    <div class="mittChildren1">
      <h2 class="subtitle">这是mitt的子组件1</h2>
    </div>
    <div class="mittChildren2">
      <h2 class="subtitle">这是mitt的子组件2</h2>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* 父组件样式 */
.mittFather {
  background-color: #ff8a65; /* 橙红色 */
  padding: 40px 20px;
  border-radius: 16px;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 800px;
  margin: 40px auto;
}

/* 父组件标题 */
.title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
  letter-spacing: 1px;
}

/* 子组件公共样式 */
.mittChildren1,
.mittChildren2 {
  background-color: #4dabf7; /* 蓝色 */
  padding: 24px;
  border-radius: 12px;
  color: #fff;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* 鼠标悬停效果 */
.mittChildren1:hover,
.mittChildren2:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
}

/* 子组件标题 */
.subtitle {
  font-size: 22px;
  margin: 0;
  font-weight: 500;
}
</style>
