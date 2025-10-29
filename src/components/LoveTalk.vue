<template>
  <div class="love">
    <button @click="getLove()">获取新的数据</button>
    <ul>
      <li v-for="value in source" :key="value.id">{{ value.name }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
const source = ref([
  { id: 1, name: "张三" },
  { id: 2, name: "李四" },
  { id: 3, name: "王五" },
]);

async function getLove() {
  //获取新的数据
  let talk = await axios.get("https://v1.hitokoto.cn");
  //把请求回来的数据 包装成一个对象。
  let obj = { id: Date.now(), name: talk.data.hitokoto };

  console.log(talk);
  //放到数组中
  source.value.unshift(obj);
}
</script>

<style scoped>
.love {
  background-color: lightpink;
}
</style>
