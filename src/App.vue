<script lang="ts" setup>
import Head from "@/components/head.vue";
import BodyLeft from "@/components/BodyLeft.vue";
import BodyRight from "@/components/BodyRight.vue";
</script>

<template>
  <div class="app">
    <div class="header">
      <!-- 头部 -->
      <Head />
    </div>
    <div class="body">
      <div class="bodyLeft">
        <!-- 左侧菜单栏 -->
        <BodyLeft />
      </div>
      <div class="bodyRight">
        <!-- 展示区 -->
        <!-- 这个组件标签我觉得可以不要 直接写盒子样式 然后直接放展示路由 -->
        <BodyRight />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 整体布局 */
.app {
  display: flex;
  /* 灵活布局  默认是横向 */
  flex-direction: column;
  /* 控制display纵向排列 */
  /* align-items: center;  控制所有内容居中*/
  min-height: 100vh;
  background: linear-gradient(135deg, #a8edea, #fed6e3);
  color: #333;
  padding: 40px 20px;
}
.body {
  display: flex;
  flex: 1;
}
/* .bodyRight {
  background-color: rgb(194, 225, 132);
  height: 100%;
  width: 1400px;
} */
</style>
