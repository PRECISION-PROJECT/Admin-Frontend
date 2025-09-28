import { useMutation } from "@tanstack/react-query";

import { IAxiosResponse } from "@/types/axios";
import { KEYS } from "./keys";
import {
  uploadFile
} from "./requests";
import {
  UploadFileRequest,
  UploadFileResponse
} from "./types";

export const useUploadFileMutation = () => {
  return useMutation<UploadFileResponse, IAxiosResponse, UploadFileRequest>({
    mutationKey: [KEYS.FILE_UPLOAD],
    mutationFn: (data) => uploadFile(data),
  });
};