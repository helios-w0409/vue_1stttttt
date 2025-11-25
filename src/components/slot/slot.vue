<template>
  <div class="slot">
    <h1>父组件</h1>
    <div class="component">
      <!-- 默认插槽 -->
      <Categories title="热门游戏列表">
        <ul>
          <li v-for="game in gameList" :key="game.id">{{ game.content }}</li>
        </ul>
      </Categories>
      <Categories title="今日美食城市">
        <img :src="photoUrl" alt="图片" />
      </Categories>
      <Categories title="今日影视推荐">
        <video :src="videoUrl" controls></video>
      </Categories>
    </div>
  </div>
</template>

<script setup lang="ts">
import Categories from "./categories.vue";
import { ref } from "vue";
const gameList = ref([
  { id: "1", content: "英雄联盟" },
  { id: "2", content: "穿越火线" },
  { id: "3", content: "王者荣耀" },
]);
const photoUrl = "https://images.unsplash.com/photo-1501785888041-af3ef285b470";
const videoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";
</script>

<style scoped>
/* 父组件样式 */
.slot {
  background-color: #ff8a65; /* 橙红色 */
  padding: 40px 20px;
  border-radius: 16px;
  color: #fff;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 800px;
  margin: 40px auto;
}

/* 父组件标题 */
.slot > h1 {
  font-size: 28px;
  font-weight: bold;
  margin: 0;
}

.component {
  display: flex;
  justify-content: space-evenly;
}
</style>
