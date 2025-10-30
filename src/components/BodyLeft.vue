<template>
  <div class="left">
    <ul>
      <li v-for="value in LeftMenu" :key="value.id">
        {{ value.id }}.{{ value.content }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// 优化想法:不存id index自己循环  或者直接用css修饰
const LeftMenu = ref([
  { id: 1, content: "props" },
  { id: 2, content: "自定义事件" },
  { id: 3, content: "mitt" },
  { id: 4, content: "v-model" },
  { id: 5, content: "$attrs" },
  { id: 6, content: "$refs,$parent" },
  { id: 7, content: "provide,inject" },
  { id: 8, content: "pinia" },
  { id: 9, content: "slot" },
]);
</script>

<style scoped>
.left {
  width: 200px;
  height: 100%;
  background-color: #f5f5f5;
}
li {
  list-style: none;
  padding: 10px;
}
</style>
