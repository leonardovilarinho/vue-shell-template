// @ts-check
import core from './core'

/**
 * @typedef {Object} HooksObject
 * @property {function} [updated]
 */

/**
 * Easy SW register
 * @param {string} path path to your SW file
 * @param {HooksObject} hooks object with your handler functions
 */
export const register = async (path, hooks) => {
  const registration = await navigator.serviceWorker.register(path)

  core.forEach(watch => {
    if (watch.name in hooks) {
      watch.handler(registration, hooks[watch.name])
    }
  })
}
