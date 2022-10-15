import { RolePageParams, RoleParams, RolePageListGetResultModel } from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { mockUrl = '' } = useGlobSetting();

enum Api {
  ChargePageList = '/charge/list',
  SourcePageList = '/source/list',
  CoursePageList = '/course/list',
  ServicePageList = '/service/list',

  AddChargeInfo = '/charge/add',
  AddChargeInfoList = '/charge/addList',
  UpdateChargeInfo = '/charge/update',
  DeleteChargeInfo = '/charge/delete',
  DetailCharge = '/charge/detail',

  AddServiceInfo = '/service/add',
  UpdateServiceInfo = '/service/update',
  DeleteServiceInfo = '/service/delete',
  DetailServiceInfo = '/service/detail',
}

export const getChargeListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.ChargePageList, params }, { apiUrl: mockUrl });

export const getChargeListByStudent = (params?: RoleParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.ChargePageList, params }, { apiUrl: mockUrl });

export const getSourceListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.SourcePageList, params }, { apiUrl: mockUrl });

export const getCourseListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.CoursePageList, params }, { apiUrl: mockUrl });

export const getServicePageList = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>(
    { url: Api.ServicePageList, params },
    { apiUrl: mockUrl },
  );

export const addChargeInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.AddChargeInfo, params }, { apiUrl: mockUrl });

export const addChargeInfoList = (params?: {}) =>
  defHttp.post<{}>({ url: Api.AddChargeInfoList, params }, { apiUrl: mockUrl });

export const updateChargeInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.UpdateChargeInfo, params }, { apiUrl: mockUrl });

export const deleteChargeInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.DeleteChargeInfo, params }, { apiUrl: mockUrl });

export const detailCHarge = (params?: {}) =>
  defHttp.get<{}>({ url: Api.DetailCharge, params }, { apiUrl: mockUrl });

export const addServiceInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.AddServiceInfo, params }, { apiUrl: mockUrl });

export const updateServiceInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.UpdateServiceInfo, params }, { apiUrl: mockUrl });

export const deleteServiceInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.DeleteServiceInfo, params }, { apiUrl: mockUrl });

export const detailServiceInfo = (params?: {}) =>
  defHttp.get<{}>({ url: Api.DetailServiceInfo, params }, { apiUrl: mockUrl });
