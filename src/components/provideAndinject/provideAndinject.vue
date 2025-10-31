<template>
  <div class="provideAndinject">
    <h1>父组件</h1>
    <div class="Child">
      <h2>子组件</h2>
      <div class="Grandchild">
        <h3>孙组件</h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* 父组件样式 */
.provideAndinject {
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
.provideAndinject > h1 {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 24px;
}

/* 子组件样式 */
.Child {
  background-color: #4dabf7; /* 蓝色 */
  padding: 24px;
  border-radius: 12px;
  color: #fff;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
}

/* 子组件标题 */
.Child > h2 {
  font-size: 22px;
  margin-bottom: 16px;
}

/* 孙组件样式 */
.Grandchild {
  background-color: #ffd54f; /* 黄色 */
  padding: 16px;
  border-radius: 10px;
  color: #333;
  text-align: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
}

/* 孙组件标题 */
.Grandchild > h3 {
  font-size: 18px;
  margin: 0;
}
</style>
