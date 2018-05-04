// @ts-check
export default {
  /** @type {string} hook name */
  name: 'updated',

  /**
   * Call callback when an update is detected
   * @param {ServiceWorkerRegistration} registration sw registration
   * @param {function} callback function to execute
   */
  handler: async (registration, callback) => {
    const cacheList = await caches.keys()
    cacheList.forEach(async (cacheName) => {
      if (!cacheName.includes('-temp')) return

      const tempCache = await caches.open(cacheName)
      const tempCachesKeys = await tempCache.keys()
      if (tempCachesKeys.length > 0) {
        callback()
      }
    })

    registration.onupdatefound = () => callback()
  }
}
