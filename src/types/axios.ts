export interface IAxiosResponse<T = unknown> {
  meta: IMeta;
  data: T;
}

export interface IMeta {
  code: number;
  message: string | string[];
  exception: string;
  path: string;
}
