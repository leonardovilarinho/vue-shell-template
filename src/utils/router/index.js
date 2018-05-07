import Vue from 'vue'
import VueRouter from 'vue-router'
import union from '@/utils/union'
import * as routes from '../../pages/**/route.js'
import middlewares from './middlewares'
// @ts-check

Vue.use(VueRouter)

/**
 * @type {VueRouter} router instance
 */
const router = new VueRouter({
  mode: 'history',
  routes: union(routes)
})

middlewares(router)

export default router
