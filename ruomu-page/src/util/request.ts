import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

/**
 * 请求参数
 */
interface ReqOptions<T> {
  api?: string;
  method?: 'GET' | 'POST';
  headers?: Record<string, any>;
  withCredentials?: boolean;
  json?: boolean;
  cache?: boolean;
  data?: string | T;
  timeout?: number;
  mode?: string;
  version?: number;
  [key: string]: any;
}

export interface OrderItem {
  field: string;
  direction: string;
}
/**
 * 分页请求参数
 */
export interface PaginateQuery {
  offset: number;
  size: number;
  orderBy: OrderItem[];
  [key: string]: any;
}

/**
 * 数据响应
 */
export interface Res<T = any> {
  code: number;
  msg: string;
  data?: T;
}

/**
 * 分页数据
 */
export interface Paginate<T = any>{
  total: number;
  offset: number;
  size: number;
  items?: T[];
}

// 缓存数据，设置了cache=true时启用
const cacheDataMap: Record<string, any> = {}
// 缓存请求，用于同一个请求连续发起
const cacheRequestMap: Record<string, any> = {}

// 将json数据转换为key=value形式
const json2url = function (json: { [key: string]: any }): string {
  const arr: string[] = [];

  Object.entries(json).forEach(([i, item]) => arr.push(`${i}=${item}`));

  return arr.join('&');
};

const base = '/api'
const requestFunc = function <T>(options: ReqOptions<T>) {
  const method = (options.method || 'POST').toLocaleUpperCase()
  const url = `${base}/v${options.version || 1}/${options.api}`
  let body = null;
  if (options.json === true) {
    try {
      body = JSON.stringify(options.data)
    } catch (e) {
      console.error('options.data无法转化为json字符串')
    }
  } else if (typeof options.data === 'string') {
    body = `data=${options.data}`
  } else if (options.data) {
    body = `data=${encodeURIComponent(JSON.stringify(options.data))}`
  } else {
    body = json2url(options)
  }

  const config = {
    ...options,
    url,
    headers: Object.assign({
      Accept: 'application/json, text/javascript, */*',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
      options.json === true ? {
        'Content-Type': 'application/json;charset=UTF-8'
      } : {},
      options.headers || {}
    ),
    withCredentials: options.withCredentials ?? true,
    mode: options.mode || 'no-cors',
    data: method === 'POST' ? body : null,
    responseType: 'json'
  }

  const storageKey = `m-fetch-post-cache://${url}?${body}`;
  if (options.cache && cacheDataMap[storageKey]) {
    return Promise.resolve(cacheDataMap[storageKey])
  }

  if (cacheRequestMap[storageKey]) {
    return new Promise((resolve) => {
      cacheRequestMap[storageKey].push(resolve)
    })
  }
  cacheRequestMap[storageKey] = []

  return axios.request(config as AxiosRequestConfig)
    .then((response) => {
      if (cacheRequestMap[storageKey]?.length) {
      cacheRequestMap[storageKey].forEach((resolve: (arg0: AxiosResponse<any>) => any) => resolve(response))
      }
      delete cacheRequestMap[storageKey]

      if (options.cache) {
        cacheDataMap[storageKey] = response
      }
      return response
    }).catch(error => {
    console.error(error)
  })
}

export default {
  request<T>(options: ReqOptions<T>): Promise<AxiosResponse<Res>> {
    return requestFunc(options)
  },
  post<T>(options: ReqOptions<T>): Promise<Res & any> {
    options.method = 'POST'
    return requestFunc(options).then((response) => response?.data)
  },
  get<T>(options: ReqOptions<T>): Promise<Res & any> {
    options.method = 'GET'
    return requestFunc(options).then((response) => response?.data)
  }
}