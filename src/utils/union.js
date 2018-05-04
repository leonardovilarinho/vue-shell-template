export default (obj) => {
  let result = []
  for (let item in obj) {
    result.push(obj[item])
  }

  return result
}
