<template>
  <div class="grandpa">
    <h1>爷组件</h1>

    <Father></Father>
    <!-- 传值给父组件 -->
  </div>
</template>

<script setup lang="ts">
import Father from "./Father.vue";
import { ref } from "vue";
</script>

<style scoped>
.grandpa {
  width: 600px;
  margin: 60px auto;
  padding: 40px 30px;
  background: linear-gradient(135deg, #b3e5fc, #81d4fa);
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-family: "Segoe UI", sans-serif;
  color: #01579b;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* 悬浮动效 */
.grandpa:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

/* 标题样式 */
.grandpa h1 {
  font-size: 32px;
  margin-bottom: 10px;
  letter-spacing: 1.5px;
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
}
</style>
