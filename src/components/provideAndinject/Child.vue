<template>
  <div class="child">
    <h3>子组件</h3>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.child {
  width: 400px;
  margin: 30px auto;
  padding: 25px 20px;
  background: linear-gradient(135deg, #b2ebf2, #80deea);
  border-radius: 14px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  text-align: center;
  font-family: "Segoe UI", sans-serif;
  color: #006064;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* 悬浮动效 */
.child:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
}
</style>
