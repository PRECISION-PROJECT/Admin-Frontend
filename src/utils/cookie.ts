import {
  deleteCookie,
  getCookie,
  OptionsType,
  setCookie,
} from "cookies-next/client";

export const deleteCookieData = (name: string) => {
  deleteCookie(name);
};

export const getCookieData = (name: string) => {
  return getCookie(name);
};

export const setCookieData = (
  name: string,
  value: string,
  options?: OptionsType
) => {
  setCookie(name, value, options ?? {});
};
