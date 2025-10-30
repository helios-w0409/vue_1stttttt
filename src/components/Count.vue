<template>
  <div class="count">
    <!-- 优化一下这个写法 解构赋值 -->
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
import { useCountStore } from "@/store/count.ts";
import { storeToRefs } from "pinia";

const n = ref(1);
const countStore = useCountStore();
console.log(countStore.sum);
const { sum } = storeToRefs(countStore);
//解构赋值  左边写需要解构出来的部分 右边是被结构的整体
function sumUp() {
  //第一种修改方式
  // countStore.sum += n.value;
  //第二种修改方式
  // countStore.$patch({
  //   sum: 6666,
  // });
  //第三种修改方式：action
  countStore.add(n.value);
}
function sumDown() {
  countStore.down(n.value);
}
</script>

<style scoped>
.count {
  background-color: cadetblue;
}
</style>
