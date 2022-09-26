import request from '@/utils/request'
/**
 *  登录接口
 * @param {Object} data
 * @returns Promise
 */
export function login(data) {
  return request({
    url: '/user-service/user/login',
    method: 'POST',
    data
  })
}
/**
 *  获取验证码
 * @param {Number} random
 * @returns Promise
 */
export function getCode(random) {
  return request({
    url: `/user-service/user/imageCode/${random}`,
    responseType: 'blob'
  })
}
