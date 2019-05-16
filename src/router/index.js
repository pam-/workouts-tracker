import Vue from 'vue'
import Router from 'vue-router'
import NewWorkout from '@/components/NewWorkout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NewWorkout',
      component: NewWorkout
    }
  ]
})
