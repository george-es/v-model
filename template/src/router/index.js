import Vue from 'vue'
import Router from 'vue-router'

// routers
import others from './others'

Vue.use(Router)

const routes = [].concat(others)

export default new Router({
  routes
})
