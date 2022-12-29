/**
 * @param {string} path
 * @returns {Boolean}
 */
 export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export function ishttp(url) {
  return url.indexOf('http://') !== -1 || url.indexOf('https://') !== -1
}