const dispatch = (langs, object, type) => {
  for (let item in object) {
    const itemobj = object[item]

    for (let lang in itemobj) {
      if (!(lang in langs)) {
        langs[lang] = {
          pages: {},
          subpages: {},
          commons: {},
          blocks: {},
          modules: {}
        }
      }
      item = item.toLowerCase()
      langs[lang][type][item] = itemobj[lang]
    }
  }
  return langs
}

export default (pagesAll, commonsAll, modules) => {
  let langs = {}
  let pages = {}
  let blocks = {}
  let subpages = {}
  let commons = {}

  for (let item in pagesAll) {
    const pageObj = pagesAll[item]

    if (!item.includes('$')) {
      pages[item] = pageObj
    } else {
      const name = item.split('$').slice(-1)[0]

      if (item.includes('$subpages') && name !== 'subpages') {
        subpages[name] = pageObj
      } else if (item.includes('$blocks') && name !== 'blocks') {
        blocks[name] = pageObj
      }
    }
  }

  for (let item in commonsAll) {
    const commonObj = commonsAll[item]

    if (item.includes('$')) {
      const name = item.split('$').slice(-1)[0]
      commons[name] = commonObj
    }
  }

  langs = dispatch(langs, pages, 'pages')
  langs = dispatch(langs, subpages, 'subpages')
  langs = dispatch(langs, blocks, 'blocks')
  langs = dispatch(langs, commons, 'commons')
  langs = dispatch(langs, modules, 'modules')
  return langs
}
