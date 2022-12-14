import { UploadApiResult } from './model/uploadModel';
import { defHttp } from '/@/utils/http/axios';
import { UploadFileParams } from '/#/axios';
import { useGlobSetting } from '/@/hooks/setting';
import { isString } from '/@/utils/is';

const { uploadUrl = '', mockUrl = '' } = useGlobSetting();

/**
 * @description: Upload interface
 */
export function uploadApi(
  params: UploadFileParams,
  onUploadProgress: (progressEvent: ProgressEvent) => void,
) {
  const config = {
    url: params?.url || uploadUrl,
    onUploadProgress,
  };
  // prefix
  if (mockUrl && isString(mockUrl)) {
    config.url = `${mockUrl}${config.url}`;
  }
  return defHttp.uploadFile<UploadApiResult>(config, params);
}
