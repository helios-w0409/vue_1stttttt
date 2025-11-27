<script lang="ts" setup>
import Head from "@/components/head.vue";
import BodyLeft from "@/components/BodyLeft.vue";
import BodyRight from "@/components/BodyRight.vue";
import { ref } from "vue";
//引入
import { useRouter } from "vue-router";
// 优化想法:不存id index自己循环  或者直接用css修饰
const LeftMenu = ref([
  { id: 1, content: "props" },
  { id: 2, content: "自定义事件" },
  { id: 3, content: "mitt" },
  { id: 4, content: "v-model" },
  { id: 5, content: "$attrs" },
  { id: 6, content: "$refs,$parent" },
  { id: 7, content: "provide,inject" },
  { id: 8, content: "pinia" },
  { id: 9, content: "slot" },
  { id: 10, content: "echart" },
  { id: 11, content: "el" },
]);
//获取实例
const router = useRouter();

function routeChange(index: number) {
  let id = index + 1;
  console.log(id);
  switch (id) {
    case 1:
      router.push("/props");
      break;
    case 2:
      router.push("/CustomEvent");
      break;
    case 3:
      router.push("/mitt");
      break;
    case 4:
      router.push("/vModel");
      break;
    case 5:
      router.push("/attrs");
      break;
    case 6:
      router.push("/refAndparent");
      break;
    case 7:
      router.push("/provideAndinject");
      break;
    case 8:
      router.push("/pinia");
      break;
    case 9:
      router.push("/slot");
      break;
    case 10:
      router.push("/echart");
      break;
    case 11:
      router.push("/el");
      break;
    default:
      console.log("没有找到对应的路由");
  }
}
</script>

<template>
  <div class="app">
    <div class="header">
      <!-- 头部 -->
      <Head />
    </div>

    <div class="body">
      <!-- 左侧菜单栏 -->
      <div class="bodyLeft">
        <ul>
          <li v-for="(value, index) in LeftMenu" :key="value.id">
            <p @click="routeChange(index)" active-class="active">
              {{ value.id }}.{{ value.content }}
            </p>
          </li>
        </ul>
      </div>
      <!-- 展示区 -->
      <div class="bodyRight">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 整体布局 */
.app {
  display: flex;
  /* 灵活布局  默认是横向 */
  flex-direction: column;
  /* 控制display纵向排列 */
  /* align-items: center;  控制所有内容居中*/
  min-height: 100vh;
  background: linear-gradient(135deg, #a8edea, #fed6e3);
  color: #333;
  padding: 40px 20px;
}
.body {
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
}
.bodyRight {
  flex: 1;
  /* 占满剩余空间 */
  background-color: rgb(194, 225, 132);
  height: 100%;
  width: 1400px;
  margin-top: 30px;
}
/* 给标签写样式不用写. */
ul li {
  /* background-color: #333; */
  margin-right: 200px;
  list-style: none;
  padding: 10px;
}
/* 悬停效果 */
ul li:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
  background-color: rgba(0, 0, 0, 0.05);
}
/* 点击高亮效果 */
ul li.active {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  background-color: rgba(98, 243, 139, 0.1);
  transform: translateY(-2px);
}
</style>
