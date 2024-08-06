import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import axios, { InternalAxiosRequestConfig } from "axios"

interface Default {
  code: number
  result: any
  msg: string
}

export class Request {
  instance: AxiosInstance
  baseConfig: AxiosRequestConfig = { timeout: 60000 }
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(Object.assign(this.baseConfig, config))
    this.instance.interceptors.request.use(
      (request: InternalAxiosRequestConfig) => {
        return request
      },
      (error: any) => {
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response
      },
      (error: any) => {
        let msg: string
        switch (error.response.status) {
          case 400:
            msg = "请求错误(400)"
            break
          case 401:
            msg = "未授权，请重新登录(401)"
            break
          case 403:
            msg = "拒绝访问(403)"
            break
          case 404:
            msg = "请求出错(404)"
            break
          case 408:
            msg = "请求超时(408)"
            break
          case 500:
            msg = "服务器错误(500)"
            break
          case 501:
            msg = "服务未实现(501)"
            break
          case 502:
            msg = "网络错误(502)"
            break
          case 503:
            msg = "服务不可用(503)"
            break
          case 504:
            msg = "网络超时(504)"
            break
          case 505:
            msg = "HTTP版本不受支持(505)"
            break
          default:
            msg = `连接出错(${error.response.status})!`
        }
        console.log(msg)
        return Promise.reject(error.response)
      }
    )
  }
  // 定义请求方法
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }
  public get<T = Default>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.get(url, config)
  }
  public post<T = Default>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.post(url, data, config)
  }
  public put<T = Default>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.put(url, data, config)
  }
  public delete<T = Default>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.instance.delete(url, config)
  }
}
export default new Request({})
