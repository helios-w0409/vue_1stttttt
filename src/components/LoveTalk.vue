<template>
  <div class="love">
    <button @click="getLove()">获取新的数据</button>
    <ul>
      <li v-for="value in talkList" :key="value.id">
        {{ value.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useTalkStore } from "@/store/talk";
import { storeToRefs } from "pinia";
const talkStore = useTalkStore();
console.log("gaegwrsgegher", talkStore);
console.log(talkStore.talkList);
const { talkList } = storeToRefs(talkStore);
async function getLove() {
  talkStore.addTalk();
}
// 监听talkStore数据变化
//watch是监视具体数据的变化
talkStore.$subscribe((mutation, state) => {
  console.log("talkStore", talkStore);
  //全部数据
  console.log("state", state);
  //本次变化的数据
  console.log("mutation", mutation);
  //存储数据  刷新浏览器数据也不会丢失
  localStorage.setItem("talkList", JSON.stringify(state.talkList));
});
</script>

<style scoped>
.love {
  background-color: lightpink;
}
</style>
