export type UploadFileRequest = {
  file: File;
};

export type UploadFileResponse = {
  file: {
    id: string;
    path: string;
  }
};