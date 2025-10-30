import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";
// export const useTalkStore = defineStore("talk", {
//   actions: {
//     async addTalk() {
//       //获取新的数据
//       let talkNew = await axios.get("https://v1.hitokoto.cn");
//       //把请求回来的数据 包装成一个对象。
//       let obj = { id: Date.now(), name: talkNew.data.hitokoto };
//       this.talkList.push(obj);
//     },
//   },
//   state() {
//     return {
//       //读取数据
//       talkList: JSON.parse(localStorage.getItem("talkList") as string),
//     };
//   },
// });

// 改成组合式
export const useTalkStore = defineStore("talk", () => {
  const talkList = ref(JSON.parse(localStorage.getItem("talkList") as string));
  async function addTalk() {
    //获取新的数据
    let talkNew = await axios.get("https://v1.hitokoto.cn");
    //把请求回来的数据 包装成一个对象。
    let obj = { id: Date.now(), name: talkNew.data.hitokoto };
    talkList.value.unshift(obj);
  }
  return { talkList, addTalk };
});
