import Vue from 'vue'
import VueRouter from 'vue-router'
import union from '@/utils/union'
import * as routes from '../../pages/**/route.js'
// @ts-check

Vue.use(VueRouter)

/**
 * @type {VueRouter} router instance
 */
export default new VueRouter({
  mode: 'history',
  routes: union(routes)
})
