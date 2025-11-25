<template>
  <div class="categories">
    <h2></h2>
    <slot :game="game"></slot>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let game = ref([
  { id: "1", content: "游戏1" },
  { id: "2", content: "游戏2" },
  { id: "3", content: "游戏3" },
]);
</script>

<style scoped>
.categories {
  background-color: orange;
  width: 200px;
  height: 400px;
  border-radius: 16px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  color: #fff;
  font-family: "Segoe UI", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.head {
  background-color: burlywood;
  width: 200px;
  height: 50px;
}
</style>
