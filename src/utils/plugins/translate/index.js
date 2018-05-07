import Vue from 'vue'

const t = new class Translate {
  getType(name) {
    if (name.includes('Common')) return 'commons'
    if (name.includes('Block')) return 'blocks'
    if (name.includes('SubPage')) return 'subpages'
    if (name.includes('Module')) return 'modules'
    return 'pages'
  }

  install(Vue) {
    const _class = this
    Vue.mixin({
      methods: {
        $translate(name, value = '') {
          const compName = this.$options.name
          const type = _class.getType(compName)
          name = `${type}.${this.$options.uri}.${name}`
          if (value !== '') return this.translate(name, value)
          return this.translate(name)
        }
      }
    })
  }
}()

Vue.use(t)
