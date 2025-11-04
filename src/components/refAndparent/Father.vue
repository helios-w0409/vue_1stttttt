<template>
  <div class="father">
    <h1>父组件</h1>
    <h1>房产：{{ house }}</h1>
    <button @click="getAll($refs)">获取全部子组件的信息</button>
    <Child1 ref="c1" />
    <button @click="changeData">点击获取子组件数据</button>
    <!-- 修改子组件2的电脑数据 -->
    <Child2 ref="child2" />
    <button @click="changeComputer">修改子组件2的电脑数据</button>
  </div>
</template>

<script setup lang="ts">
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
import { ref } from "vue";
const house = ref("别墅");
const c1 = ref();
const child2 = ref();
function getAll(x: any) {
  console.log(x);
  // 打印全部信息
}
function changeData() {
  // console.log(c1.value);
  c1.value.toy = "小黄";
}

function changeComputer() {
  child2.value.computer = "MacBook Pro";
}
</script>

<style scoped>
.father {
  width: 400px;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
  border-radius: 16px;
  background: linear-gradient(135deg, #d0e8ff, #f0faff);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.father:hover {
  transform: translateY(-5px);
}

.father h1 {
  color: #1a73e8;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
}
</style>
