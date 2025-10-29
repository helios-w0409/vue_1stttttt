<template>
  <div class="count">
    <h1>当前求和为{{ sum }}</h1>
    <select v-model.number="n">
      <!-- 用户选择的数字. 且转成数字 -->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="sumUp()">+</button>
    <button @click="sumDown()">-</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const sum = ref(0);
const n = ref(1);
function sumUp() {
  sum.value += n.value;
}
function sumDown() {
  sum.value -= n.value;
}
</script>

<style scoped>
.count {
  background-color: cadetblue;
}
</style>
