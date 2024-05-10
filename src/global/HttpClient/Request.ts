import { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

class HttpClient {
  private baseUrl: string;
  private sufixAPI: string = "/api/v1";

  constructor(baseUrl: string | undefined) {
    this.baseUrl = baseUrl || process.env.PUBLIC_URL;
    this.baseUrl += this.sufixAPI;
  }

  async get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await axios.get<T>(`${this.baseUrl}${url}`, config);
  }

  async post<T, U>(
    url: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<U>> {
    return await axios.post<U>(`${this.baseUrl}${url}`, data, config);
  }

  async put<T, U>(
    url: string,
    data: T,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<U>> {
    return await axios.put<U>(`${this.baseUrl}${url}`, data, config);
  }

  async delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await axios.delete<T>(`${this.baseUrl}${url}`, config);
  }
}

export default HttpClient;
