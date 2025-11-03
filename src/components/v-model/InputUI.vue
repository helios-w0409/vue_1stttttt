<template>
  <div class="inputUI">
    <input
      type="text"
      placeholder="请输入内容..."
      :value="xingming"
      @input="emit('update:xingming', (<HTMLInputElement>$event.target).value)"
    />

    <!-- 先实现代码端向页面端的流动     v-bind-->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// let content3 = ref("ceshiceshi");
//接收父组件传递过来的值
defineProps(["xingming"]);
const emit = defineEmits(["update:xingming"]);
//监听输入框的变化  实现页面端向代码端的流动

console.log();
</script>

<style scoped>
.inputUI {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

/* 华丽文本框 */
input[type="text"] {
  width: 300px;
  padding: 12px 20px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 12px;
  outline: none;
  transition: all 0.3s ease;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* 聚焦效果 */
input[type="text"]:focus {
  border-image-slice: 1;
  border-width: 2px;
  border-image-source: linear-gradient(45deg, #6a11cb, #2575fc);
  box-shadow: 0 0 10px rgba(37, 117, 252, 0.5);
  background: #fefefe;
}

/* 占位符颜色 */
input[type="text"]::placeholder {
  color: #aaa;
  font-style: italic;
}
</style>
