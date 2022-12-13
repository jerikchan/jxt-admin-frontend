import { UploadApiResult } from './model/uploadModel';
import { defHttp } from '/@/utils/http/axios';
// import { UploadFileParams } from '/#/axios';
import { useGlobSetting } from '/@/hooks/setting';

// const { mockUrl = '' } = useGlobSetting();
const { mockUrl = '' } = useGlobSetting();

// enum Api {
//   UploadIdCardFront = '/file/id/card/front/upload',
//   UploadIdCardBack = '/file/id/card/back/upload',
// }

export async function uploadIdCardFront(params?: any) {
  try {
    const ret = await defHttp.uploadFile<UploadApiResult>(
      {
        url: `${mockUrl}/file/id/card/front/upload`,
        onUploadProgress: params.onProgress,
      },
      {
        file: params.file,
      },
    );
    if (ret.status === 200 && ret.data.code === 0) {
      params.onSuccess(ret.data.result, ret.request);
    } else {
      params.onError(null, ret.request);
    }
  } catch (err) {
    params.onError(err, null);
  }
}

export async function uploadIdCardBack(params?: any) {
  try {
    const ret = await defHttp.uploadFile<UploadApiResult>(
      {
        url: `${mockUrl}/file/id/card/back/upload`,
        onUploadProgress: params.onProgress,
      },
      {
        file: params.file,
      },
    );
    if (ret.status === 200 && ret.data.code === 0) {
      params.onSuccess(ret.data.result, ret.request);
    } else {
      params.onError(null, ret.request);
    }
  } catch (err) {
    params.onError(err, null);
  }
}
