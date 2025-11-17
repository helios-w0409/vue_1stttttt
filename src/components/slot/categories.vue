<template>
  <div class="categories">
    <div class="head">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
let title = defineProps(["title"]);
console.log(title);
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
