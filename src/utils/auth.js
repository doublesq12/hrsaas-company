import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 获取时间戳
export function getTimeToken() {
  return Cookies.get('timeKey')
}
// 设置时间戳
export function setTimeToken() {
  return Cookies.set('timeKey', Date.now())
}
