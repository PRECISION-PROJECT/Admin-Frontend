import httpInstance from "../http-instance";
import { GetWhoAmIResponse } from "./response.dto";

export const getWhoAmI = (signal?: AbortSignal) => {
  return httpInstance
    .get<GetWhoAmIResponse>("/auth/me", { signal })
    .then((res) => res);
};
