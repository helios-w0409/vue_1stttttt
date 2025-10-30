import { defineStore } from "pinia";
import { defineProps } from "vue";
//第一个值是id 建议和文件名一致 第二个值是配置项
// 记得暴露出来
export const useCountStore = defineStore("count", {
  //写组件中需要的方法
  actions: {
    add(val: any) {
      //   console.log("被调用");

      console.log("haifguyiwef", this);
      this.sum += val;
    },
    down(val: any) {
      this.sum -= val;
    },
  },
  // 存储数据的地方 state要写成函数形式
  state() {
    // 返回的是一个对象
    return {
      sum: 6,
    };
  },
});
