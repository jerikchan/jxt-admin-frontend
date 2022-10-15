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

export const getPaperTypeList = (params?: {}) =>
  defHttp.get<{}>(
    { url: Api.DicList, params: { ...params, type: '证件类型' } },
    { apiUrl: mockUrl },
  );

export const getSecondPaperTypeList = (params?: {}) =>
  defHttp.get<{}>(
    { url: Api.DicList, params: { ...params, type: '第二证件类型' } },
    { apiUrl: mockUrl },
  );

export const getExamModelList = (params?: {}) =>
  defHttp.get<{}>(
    { url: Api.DicList, params: { ...params, type: '报考模式' } },
    { apiUrl: mockUrl },
  );

export const getServiceModeList = (params?: {}) =>
  defHttp.get<{}>(
    { url: Api.DicList, params: { ...params, type: '业务模式' } },
    { apiUrl: mockUrl },
  );

export const getShenqingList = (params?: {}) =>
  defHttp.get<{}>(
    { url: Api.DicList, params: { ...params, type: '申请类型' } },
    { apiUrl: mockUrl },
  );

export const getExamCarTypeList = (params?: {}) =>
  defHttp.get<{}>(
    { url: Api.DicList, params: { ...params, type: '报考车型' } },
    { apiUrl: mockUrl },
  );

export const getChargeTypeList = (params?: {}) =>
  defHttp.get<{}>(
    { url: Api.DicList, params: { ...params, type: '收费类型' } },
    { apiUrl: mockUrl },
  );

export const getPayMethodTypeList = (params?: {}) =>
  defHttp.get<{}>(
    { url: Api.DicList, params: { ...params, type: '收费方式' } },
    { apiUrl: mockUrl },
  );

export const getCountryProLevelList = (params?: {}) =>
  defHttp.get<{}>(
    { url: Api.DicList, params: { ...params, type: '国家职业等级' } },
    { apiUrl: mockUrl },
  );

export const getCoachServiceTypeList = (params?: {}) =>
  defHttp.get<{}>(
    { url: Api.DicList, params: { ...params, type: '教练业务类型' } },
    { apiUrl: mockUrl },
  );

export const getWorkStautsList = (params?: {}) =>
  defHttp.get<{}>(
    { url: Api.DicList, params: { ...params, type: '在岗状态' } },
    { apiUrl: mockUrl },
  );

export const getReciveOrNotTypeList = (params?: {}) =>
  defHttp.get<{}>(
    { url: Api.DicList, params: { ...params, type: '是否接送' } },
    { apiUrl: mockUrl },
  );
