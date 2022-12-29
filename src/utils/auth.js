import Cookies from 'js-cookie'
import { user } from "@/pinia";
const TokenKey = 'Examples-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

function authPermission(permission) {
  const all_permission = "*:*:*";
  const permissions = user().permissions
  if (permission && permission.length > 0) {
    return permissions.some(v => {
      return all_permission === v || v === permission
    })
  } else {
    return false
  }
}

function authRole(role) {
  const super_admin = "admin";
  const roles = user().roles
  if (role && role.length > 0) {
    return roles.some(v => {
      return super_admin === v || v === role
    })
  } else {
    return false
  }
}
// 验证用户是否具备某权限
export function hasPermi(permission) {
  return authPermission(permission);
}
// 验证用户是否含有指定权限，只需包含其中一个
export function hasPermiOr(permissions) {
  return permissions.some(item => {
    return authPermission(item)
  })
}
// 验证用户是否含有指定权限，必须全部拥有
export function hasPermiAnd(permissions) {
  return permissions.every(item => {
    return authPermission(item)
  })
}
// 验证用户是否具备某角色
export function hasRole(role) {
  return authRole(role);
}
// 验证用户是否含有指定角色，只需包含其中一个
export function hasRoleOr(roles) {
  return roles.some(item => {
    return authRole(item)
  })
}
// 验证用户是否含有指定角色，必须全部拥有
export function hasRoleAnd(roles) {
  return roles.every(item => {
    return authRole(item)
  })
}

