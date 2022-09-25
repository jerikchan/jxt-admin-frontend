import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { mockUrl = '' } = useGlobSetting();

enum Api {
  DicList = '/dic/dic',

  AddDicInfo = '/dic/add',
}

export const getStudentLabelDicList = (params?: {}) =>
  defHttp.get<{}>({ url: Api.DicList, params }, { apiUrl: mockUrl });

export const addDicInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.AddDicInfo, params }, { apiUrl: mockUrl });
