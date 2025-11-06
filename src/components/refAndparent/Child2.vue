<template>
  <div class="child2">
    <h2>子组件2</h2>
    <h2>电脑：{{ computer }}</h2>
    <h2>书籍：{{ book }}</h2>
    <button @click="changeHome($parent)">修改父亲的房产</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const computer = ref("笔记本电脑");
const book = ref("编程书籍");

function changeHome(parent: any) {
  parent.house -= 1;
}

defineExpose({
  computer,
  book,
});
</script>

<style scoped>
.child2 {
  width: 320px;
  margin: 20px auto;
  padding: 16px;
  text-align: center;
  border-radius: 14px;
  background: linear-gradient(135deg, #b3e5fc, #e1f5fe); /* 清爽蓝色渐变 */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.child2:hover {
  transform: translateY(-5px);
}

.child2 h2 {
  color: #0288d1;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.5px;
}
</style>
