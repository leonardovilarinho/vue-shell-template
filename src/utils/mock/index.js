import { createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

let testVar = null

export default class Mock {
  constructor (full = false) {
    this.options = {
      methods: {},
      computed: {},
      propsData: {},
      mocks: {},
      watch: {},
      stubs: false
    }

    this.vue = createLocalVue()
    this.vue.use(VueRouter)
    this.router = new VueRouter()

    if (full) {
      this.addML().addLazy()
    }
  }

  addML () {
    this.options.beforeCreate = function () {
      this.$ml = {
        get (p) {
          p = testVar === null ? p : testVar
          testVar = null
          return p
        },
        with (n, v) {
          testVar = v || n
          return this
        }
      }
    }
    return this
  }

  addLazy () {
    this.vue.directive('lazy', {})
    this.options.localVue = this.vue
    return this
  }

  push (name, value) {
    if (name in this.options) {
      if (Array.isArray(value)) {
        if (this.options[name] === false) this.options[name] = []
        value.forEach(v => {
          this.options[name].push(v)
        })
      } else {
        if (this.options[name] === false) this.options[name] = {}
        this.options[name] = { ...this.options[name],
          ...value
        }
      }
    }
    return this
  }

  generate () {
    return this.options
  }
}
