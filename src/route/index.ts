import { createRouter, createWebHistory } from "vue-router";
import props from "@/components/props/props.vue";
import CustomEvent from "@/components/CustomEvent/CustomEvent.vue";
import Mitt from "@/components/mitt/mitt.vue";
import vModel from "@/components/v-model/vModel.vue";
import attrs from "@/components/attrs/attrs.vue";
import refAndparent from "@/components/refAndparent/refAndparent.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/props",
      component: props,
    },
    {
      path: "/CustomEvent",
      component: CustomEvent,
    },
    {
      path: "/mitt",
      component: Mitt,
    },
    {
      path: "/vModel",
      component: vModel,
    },
    {
      path: "/attrs",
      component: attrs,
    },
    {
      path: "/refAndparent",
      component: refAndparent,
    },
  ],
});
export default router;
