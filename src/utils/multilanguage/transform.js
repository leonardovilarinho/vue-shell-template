const dispatch = (langs, object, type) => {
  for (let item in object) {
    const itemobj = object[item]

    for (let lang in itemobj) {
      if (!(lang in langs)) {
        langs[lang] = {
          pages: {},
          commons: {},
          modules: {}
        }
      }
      item = item.replace(/\$([a-z])/g, (g) => g[1].toUpperCase()).toLowerCase()

      langs[lang][type][item] = itemobj[lang]
    }
  }
  return langs
}

export default (pages, commons, modules) => {
  let langs = {}

  langs = dispatch(langs, pages, 'pages')
  langs = dispatch(langs, commons, 'commons')
  langs = dispatch(langs, modules, 'modules')
  return langs
}
