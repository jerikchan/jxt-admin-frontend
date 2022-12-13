export interface UploadApiResult {
  result(result: any, file: any, request: any);
  message: string;
  code: number;
  url: string;
  id?: string;
}
