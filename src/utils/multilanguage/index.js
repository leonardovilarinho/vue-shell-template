import Vue from 'vue'
import VueMultilanguage from 'vue-multilanguage'
import transform from './transform'
import * as frompages from '../../pages/**/translate.js'
import * as fromcommons from '../../commons/**/translate.js'

const languages = transform(frompages, fromcommons, {})

Vue.use(VueMultilanguage, {
  default: process.env.VUE_APP_LANG || 'en',
  ...languages
})
