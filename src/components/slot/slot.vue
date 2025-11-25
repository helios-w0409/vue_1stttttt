<template>
  <div class="slot">
    <h1>父组件</h1>
    <div class="component">
      <categories>
        <template #default="param">
          <ul>
            <li v-for="value in param.game" :key="value.id">
              {{ value.content }}
            </li>
          </ul>
        </template>
      </categories>

      <categories>
        <template #default="param">
          <ol>
            <li v-for="value in param.game" :key="value.id">
              {{ value.content }}
            </li>
          </ol>
        </template>
      </categories>

      <categories>
        <template #default="param">
          <h2 v-for="value in param.game" :key="value.id">
            {{ value.content }}
          </h2>
        </template>
      </categories>
    </div>
  </div>
</template>

<script setup lang="ts">
import categories from "./categories.vue";
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
/* .title {
  font-size: 28px;
  font-weight: bold;
  margin: 0;
} */

.component {
  display: flex;
  justify-content: space-evenly;
}
</style>
