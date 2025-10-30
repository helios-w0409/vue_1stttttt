import { defineStore } from "pinia";
export const useTalkStore = defineStore("talk", {
  actions: {
    addTalk(talk: any) {
      console.log("调用");
      this.talkList.push(talk);
    },
  },
  state() {
    return {
      talkList: [
        { id: 1, name: "张三" },
        { id: 2, name: "李四" },
        { id: 3, name: "王五" },
      ],
    };
  },
});
