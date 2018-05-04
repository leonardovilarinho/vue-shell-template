import Vue from 'vue'

const t = new class Translate {
  install (Vue) {
    Vue.mixin({
      methods: {
        $translate (name, value = '') {
          const compName = this.$options.name
          const type = compName.includes('Page') ? 'pages' : (compName.includes('Common') ? 'commons' : 'modules')
          const instance = compName.toLowerCase().replace(type.replace('s', ''), '')
          return this.translate(`${type}.${instance}.${name}`, value)
        }
      }
    })
  }
}()

Vue.use(t)
