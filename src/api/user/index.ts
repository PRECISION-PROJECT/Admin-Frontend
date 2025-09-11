import { useQuery } from "@tanstack/react-query";
import { getWhoAmI } from "./request";
import { GetWhoAmIResponse } from "./response.dto";

export const useWhoAmIQuery = (
  queryParams?: Omit<
    Parameters<typeof useQuery<GetWhoAmIResponse>>[0],
    "queryKey" | "queryFn"
  >
) => {
  return useQuery({
    queryKey: ["whoami"],
    queryFn: ({ signal }) => getWhoAmI(signal),
    ...queryParams,
  });
};
