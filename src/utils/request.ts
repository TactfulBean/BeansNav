import axios, { InternalAxiosRequestConfig } from "axios"
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

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
