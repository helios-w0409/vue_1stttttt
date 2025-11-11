<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>继承的钱{{ money }}</h4>
    <h4>继承的汽车: 品牌{{ car.brand }}型号 {{ car.model }}</h4>
    <button @click="changeMoney()">花钱</button>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
//接收数据 祖孙之间
let { money, changeMoney } = inject("money", {
  money: 0,
  changeMoney: () => {},
});
let car = inject("car", { brand: "没有数据", model: "没有数据" });
</script>

<style scoped>
.child {
  width: 400px;
  margin: 30px auto;
  padding: 25px 20px;
  background: linear-gradient(135deg, #b2ebf2, #80deea);
  border-radius: 14px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  text-align: center;
  font-family: "Segoe UI", sans-serif;
  color: #006064;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* 悬浮动效 */
.child:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
}
</style>
