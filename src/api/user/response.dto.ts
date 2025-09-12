import { PaginatedResponseType } from "@/types";
import { GetWhoAmIResponse } from "../auth/response.dto";

export type GetUserListResponse = PaginatedResponseType<GetWhoAmIResponse>;