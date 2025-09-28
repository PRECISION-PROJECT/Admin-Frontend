import httpInstance from "../http-instance";
import { KEYS } from "./keys";
import { UploadFileRequest, UploadFileResponse } from "./types";

export const uploadFile = (
  data: UploadFileRequest,
  signal?: AbortSignal
): Promise<UploadFileResponse> => {
  return httpInstance
    .post<UploadFileResponse>(KEYS.FILE_UPLOAD, data, {
      signal,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => res);
};
