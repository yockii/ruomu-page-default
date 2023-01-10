// import clone from 'just-clone'
import cloneDeep from 'lodash.clonedeep'

export function deepClone<T extends object> (origin: T): T {
  // return clone<T>(origin) as T
  return cloneDeep(origin)
}

export function isArray (obj: any) {
  return obj && typeof obj === 'object' && obj instanceof Array
}

export const generateId = function () {
  return Math.floor(Math.random() * 100000 + Math.random() * 20000 + Math.random() * 5000)
}
