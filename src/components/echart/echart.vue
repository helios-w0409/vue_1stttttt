<template>
  <div class="echart">
    <h1>echart 图表练习</h1>
  </div>
  <div id="main"></div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from "vue";
import * as echarts from "echarts";
//定义一个变量  然后给他赋值 涉及局部定义变量 然后但是其他地方要用可以声明一个空的 然后 后面给它赋值
let myChart: echarts.ECharts | null = null;
onMounted(() => {
  const chartDom = document.getElementById("main");
  myChart = echarts.init(chartDom);

  //在挂载的时候开始监听
  window.addEventListener("resize", resize);

  myChart.setOption({
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", resize);
});

function resize() {
  if (myChart) {
    myChart.resize();
  }
}
</script>

<style scoped>
.echart {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
#main {
  width: 100%;
  height: 400px;
  background-color: rgb(226, 188, 188);
}
</style>
