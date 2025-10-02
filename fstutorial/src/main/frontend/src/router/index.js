import { createRouter, createWebHistory } from 'vue-router'
import TutorialList from "@/components/TutorialList.vue";
import Tutorial from "@/components/TutorialDetail.vue";
import AddTutorial from "@/components/AddTutorial.vue";

const routes = [
  {
    path: '/',
    alias: '/tutorials',
    name: 'tutorials',
    component: TutorialList
  },
  {
    path: '/tutorial/:id',
    name: 'tutorial-details',
    component: Tutorial
  },
  {
    path: '/add',
    name: 'add',
    component: AddTutorial
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
