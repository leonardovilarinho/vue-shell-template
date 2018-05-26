import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'
import transform from './transform'
import * as frompages from '../../pages/**/translate.js'
import * as fromcommons from '../../commons/**/translate.js'
import * as frommodules from '../../modules/**/translate.js'

const langs = transform(frompages, fromcommons, frommodules)

const getType = (name) => {
  if (name.includes('Common')) return 'commons'
  if (name.includes('Module')) return 'modules'
  return 'pages'
}

Vue.use(MLInstaller)
export default new MLCreate({
  initial: process.env.VUE_APP_LANG || 'pt',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('pt').create(langs.pt),
    new MLanguage('en').create(langs.en)
  ],
  middleware: (component, path) => {
    const compName = component.$options.name
    const type = getType(compName)
    return `${type}.${component.$options.uri}.${path}`
  }
})
