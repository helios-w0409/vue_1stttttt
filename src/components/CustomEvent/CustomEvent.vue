<template>
  <div class="customParent">
    <h1 class="title">这是 自定义组件的父组件</h1>

    <div class="customChild">
      <h2 class="subtitle">这是自定义组件的子组件</h2>
      <p class="desc">子组件内容区域</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* 父组件样式 */
.customParent {
  background-color: #ffb74d; /* 温暖橙色 */
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

/* 子组件样式 */
.customChild {
  background-color: #4dabf7; /* 清爽蓝色 */
  padding: 24px;
  border-radius: 12px;
  color: #fff;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

/* 子组件标题 */
.subtitle {
  font-size: 22px;
  margin-bottom: 12px;
  font-weight: 500;
}

/* 子组件描述文字 */
.desc {
  font-size: 16px;
  color: #f1f1f1;
  line-height: 1.5;
}
</style>
