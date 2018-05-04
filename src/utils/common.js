// @ts-check

/**
 * Capitalize first character of a string
 * @param {string} str string to capitalize
 * @return {string} string with first char capitalized
 */
export const capitalizeFirstChar = (str) => {
  const firstChar = str.charAt(0).toUpperCase()
  const restOfString = str.slice(1)

  return `${firstChar}${restOfString}`
}

/**
 * Capitalize all first properties of the object
 * @param {Object} obj object for capitalize properties
 * @return {Object} object with properties capitalized
 */
export const propertiesCapitalize = (obj) => {
  let result = {}
  for (let item in obj) {
    result[capitalizeFirstChar(item)] = obj[item]
  }
  return result
}
