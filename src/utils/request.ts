import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

type Result<T> = {
	code: number
	message: string
	result: T
}

export class Request {
	instance: AxiosInstance
	baseConfig: AxiosRequestConfig = { timeout: 60000 }
	constructor(config: AxiosRequestConfig) {
		this.instance = axios.create(Object.assign(this.baseConfig, config))
		this.instance.interceptors.request.use(
			(request) => {
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
	public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
		return this.instance.get(url, config)
	}
	public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
		return this.instance.post(url, data, config)
	}
	public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
		return this.instance.put(url, data, config)
	}
	public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
		return this.instance.delete(url, config)
	}
}
export default new Request({})
