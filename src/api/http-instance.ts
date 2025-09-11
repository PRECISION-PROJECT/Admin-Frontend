import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type CreateAxiosDefaults,
  type InternalAxiosRequestConfig,
} from "axios";

import { TApiResponse, TErrorResponse, TOptional } from "@/types";
import { deleteCookieData, getCookieData, setCookieData } from "@/utils";

type TFailedRequests = {
  resolve: (value: AxiosResponse) => void;
  reject: (value: AxiosError) => void;
  config: AxiosRequestConfig;
  error: AxiosError;
};

const MAXIMUM_RETRY_UN_AUTHENTICATION = 5;

type TRefreshToKenResponse = {
  data: {
    accessToken?: string;
    refreshToken?: string;
  };
};

export enum ECookie {
  ACCESS_TOKEN = "access_token",
  REFRESH_TOKEN = "refresh_token",
}

class HttpInstance {
  private readonly instance: AxiosInstance;

  private failedRequests: TFailedRequests[] = [];

  private isTokenRefreshing = false;

  private readonly refreshTokenCount = new Map<TOptional<string>, number>();

  constructor(config?: CreateAxiosDefaults) {
    const baseURL =
      process.env.NEXT_PUBLIC_API_URL! +
      process.env.NEXT_PUBLIC_API_PREFIX! +
      process.env.NEXT_PUBLIC_API_VERSION!;

    this.instance = axios.create({
      ...config,
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000,
    });
    this.setupInterceptorsTo(this.instance);
  }

  private readonly onRequest = async (
    config: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> => {
    const token = getCookieData(ECookie.ACCESS_TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  };

  private readonly onRequestError = (
    error: AxiosError
  ): Promise<AxiosError> => {
    console.error(`[request error] [${JSON.stringify(error)}]`);

    return Promise.reject(error);
  };

  private readonly onResponse = <T>(
    response: AxiosResponse<TApiResponse<T>>
  ): TApiResponse<T> => {
    const { url } = response.config;
    const result = response.data;

    const isExistedRefreshTokenCount = this.refreshTokenCount.has(url);

    if (isExistedRefreshTokenCount) {
      this.refreshTokenCount.set(url, 0);
    }

    return result;
  };

  private readonly onResponseError = async (error: AxiosError) => {
    const originalRequest = error.config!;
    const { url } = originalRequest;
    const data = error.response?.data as TErrorResponse;

    if (data.statusCode !== 401) {
      return Promise.reject(data);
    }

    if (this.isTokenRefreshing) {
      return new Promise((resolve, reject) => {
        this.failedRequests.push({
          resolve,
          reject,
          config: originalRequest,
          error,
        });
      });
    }

    const existedRefreshTokenCount = this.refreshTokenCount.get(url) ?? 0;

    if (existedRefreshTokenCount >= MAXIMUM_RETRY_UN_AUTHENTICATION) {
      window.location.href = "/auth/login";

      return Promise.reject(
        new Error("Maximum retry attempts exceeded. Redirecting to login.")
      );
    }

    this.refreshTokenCount.set(url, existedRefreshTokenCount + 1);
    this.isTokenRefreshing = true;

    try {
      const refreshToken = getCookieData(ECookie.REFRESH_TOKEN) ?? "";
      const urlEndpoint = `${process.env.NEXT_PUBLIC_API_URL}/auth/user/refresh-token`;

      const response = await axios.post(
        urlEndpoint,
        {
          refreshToken,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result: TRefreshToKenResponse = response.data;

      setCookieData(ECookie.ACCESS_TOKEN, result.data.accessToken!, {
        path: "/",
      });
      setCookieData(ECookie.REFRESH_TOKEN, result.data.refreshToken!, {
        path: "/",
      });

      this.failedRequests.forEach(({ resolve, reject, config }) => {
        this.instance(config)
          .then((resHttp) => resolve(resHttp))
          .catch((errorHttp) => reject(errorHttp));
      });
    } catch (error: unknown) {
      this.failedRequests.forEach(({ reject, error: errorFailedRequest }) =>
        reject(errorFailedRequest)
      );
      this.removeTokenCookie();
      window.location.href = `/`;

      return Promise.reject(error);
    } finally {
      this.failedRequests = [];
      this.isTokenRefreshing = false;
    }

    if (originalRequest) {
      return this.instance(originalRequest);
    }

    return Promise.reject(new Error("Original request is undefined."));
  };

  private setupInterceptorsTo(axiosInstance: AxiosInstance): AxiosInstance {
    axiosInstance.interceptors.request.use(this.onRequest, this.onRequestError);
    axiosInstance.interceptors.response.use(
      this.onResponse,
      this.onResponseError
    );

    return axiosInstance;
  }

  private removeTokenCookie() {
    deleteCookieData(ECookie.ACCESS_TOKEN);
    deleteCookieData(ECookie.REFRESH_TOKEN);
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, config);
  }

  public async post<T, D = unknown>(
    url: string,
    data: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.post(url, data, config);
  }

  public async patch<T, D = unknown>(
    url: string,
    data: D,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.patch(url, data, config);
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.delete(url, config);
  }
}

const httpInstance = new HttpInstance();

export default httpInstance;
