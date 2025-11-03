<template>
  <div class="father">
    <h1>父组件</h1>
    <h1>房产：{{ house }}</h1>
    <Child1 />
    <Child2 />
  </div>
</template>

<script setup lang="ts">
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
import { ref } from "vue";
const house = ref("别墅");
</script>

<style scoped>
.father {
  width: 400px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
  border-radius: 16px;
  background: linear-gradient(135deg, #d0e8ff, #f0faff);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.father:hover {
  transform: translateY(-5px);
}

.father h1 {
  color: #1a73e8;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
}
</style>
