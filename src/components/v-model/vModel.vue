<template>
  <div class="vModel">
    <h1>这是v-model的父组件</h1>
    <!-- v-model用于封装自己写的组件 所以需要掌握底层逻辑 -->
    <!-- <InputUI v-model="modelValue" /> -->
    <!-- 改名。不用v-model传递 -->
    <InputUI v-model:xingming="modelValue" />
    <!-- 自己写的组件不能直接写v-model需要 封装一下。现在的状态是代码数据不显示到页面上。页面上的数据不同步到代码上 -->
    <!-- <InputUI :content="content"  @input = "<ht>$event.target.value"/> -->
    <!-- props实现父传子  自定义事件实现子传父 -->
  </div>
</template>

<script setup lang="ts">
import InputUI from "./InputUI.vue";
import { ref } from "vue";
let modelValue = ref("ceshi");
</script>

<style scoped>
/* 父组件容器 */
.vModel {
  background-color: #81c784; /* 清新绿色 */
  padding: 40px 20px;
  border-radius: 16px;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 800px;
  margin: 40px auto;
}
</style>
