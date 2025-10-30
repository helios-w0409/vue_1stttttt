<template>
  <div class="love">
    <button @click="getLove()">获取新的数据</button>
    <ul>
      <li v-for="value in talkStore.talkList" :key="value.id">
        {{ value.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useTalkStore } from "@/store/talk";
const talkStore = useTalkStore();
console.log(talkStore);
console.log(talkStore.talkList);

async function getLove() {
  //获取新的数据
  let talk = await axios.get("https://v1.hitokoto.cn");
  //把请求回来的数据 包装成一个对象。
  let obj = { id: Date.now(), name: talk.data.hitokoto };

  // console.log(talk);
  // //放到数组中
  // // source.value.unshift(obj);
  talkStore.addTalk(obj);
}
</script>

<style scoped>
.love {
  background-color: lightpink;
}
</style>
