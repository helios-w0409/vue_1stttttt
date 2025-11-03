import { createRouter, createWebHistory } from "vue-router";

import Props from "@/components/props/Father.vue";
import CustomEvent from "@/components/CustomEvent/Father.vue";
import Mitt from "@/components/mitt/Father.vue";
import vModel from "@/components/v-model/vModel.vue";
import attrs from "@/components/attrs/Grandpa.vue";
import refAndparent from "@/components/refAndparent/refAndparent.vue";
import provideAndinject from "@/components/provideAndinject/provideAndinject.vue";
import pinia from "@/components/pinia/pinia.vue";
import slot from "@/components/slot/slot.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/props",
      component: Props,
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
    {
      path: "/provideAndinject",
      component: provideAndinject,
    },
    {
      path: "/pinia",
      component: pinia,
    },
    {
      path: "/slot",
      component: slot,
    },
  ],
});
export default router;
