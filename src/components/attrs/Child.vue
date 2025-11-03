<template>
  <div class="child">
    <h3>子组件</h3>
    <p>a:{{ a }}</p>
    <p>b:{{ b }}</p>
    <p>c:{{ c }}</p>
    <p>d:{{ d }}</p>
    <p>x:{{ x }}</p>
    <p>y:{{ y }}</p>
    <!-- 实现子组件操控爷组件 -->
    <button @click="updateValues(10)">点击按钮爷组件a数值增加</button>
  </div>
</template>

<script setup lang="ts">
defineProps(["a", "b", "c", "d", "x", "y", "updateValues"]);
// 接收从爷组件传递过来的值
</script>

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
