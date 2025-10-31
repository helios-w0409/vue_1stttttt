<template>
  <div class="props">
    <h1 class="title">这是 Props 父组件</h1>

    <div class="propsChildren">
      <h2 class="subtitle">这是 Props 子组件</h2>
      <p class="desc">子组件内容区域，可以展示子组件传入的 props 或内容。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// 暂时没有逻辑，这里可以以后接收 props 或引入子组件
</script>

<style scoped>
.props {
  background-color: #ff6b6b; /* 柔和的红色背景 */
  padding: 40px;
  border-radius: 16px;
  color: white;
  text-align: center;
  /* 阴影 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  /* margin: 60px auto; */
}

.title {
  font-size: 28px;
  margin-bottom: 24px;
  letter-spacing: 1px;
}

.propsChildren {
  background-color: #4dabf7; /* 清爽蓝色 */
  padding: 24px;
  border-radius: 12px;
  color: #fff;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
}

.subtitle {
  font-size: 22px;
  margin-bottom: 12px;
}

.desc {
  font-size: 16px;
  color: #f1f1f1;
}
</style>
