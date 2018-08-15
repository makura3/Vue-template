import Vue from 'vue'
import Router from 'vue-router'

/* component */
import Index from './views/Index'
import About from './views/About'
import Cat from './views/Cat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/cat/:id',
      name: 'cat',
      component: Cat
    }
  ]
})
