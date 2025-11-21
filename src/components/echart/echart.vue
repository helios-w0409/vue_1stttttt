<template>
  <div class="echart">
    <h1>echart 图表练习</h1>
  </div>
  <div id="main"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import * as echarts from "echarts";
onMounted(() => {
  const chartDom = document.getElementById("main");
  const myChart = echarts.init(chartDom);

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
</script>

<style scoped>
.echart {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
}
#main {
  width: 600px;
  height: 400px;
  background-color: rgb(226, 188, 188);
}
</style>
