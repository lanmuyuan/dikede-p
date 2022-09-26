/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
/**
 *  用户名验证
 * @param {*} str
 * @returns {Boolean}
 */
export function validUserName(str) {
  return /^[a-zA-Z0-9_-]{4,16}$/.test(str.trim())
}
