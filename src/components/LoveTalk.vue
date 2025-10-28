<template>
  <div class="love">
    <button>获取新的数据</button>
    <ul>
      <li v-for="value in source" :key="value.id">{{ value.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const source = ref([
  { id: 1, name: "张三" },
  { id: 2, name: "李四" },
  { id: 3, name: "王五" },
]);
</script>

<style scoped>
.love {
  background-color: lightpink;
}
</style>
