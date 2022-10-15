import { RolePageParams, RoleParams, RolePageListGetResultModel } from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { mockUrl = '' } = useGlobSetting();

enum Api {
  ChargePageList = '/charge/list',
  SourcePageList = '/source/list',
  CoursePageList = '/course/list',

  AddChargeInfo = '/charge/add',
  AddChargeInfoList = '/charge/addList',
  UpdateChargeInfo = '/charge/update',
  DeleteChargeInfo = '/charge/delete',
  DetailCharge = '/charge/detail',
}

export const getChargeListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.ChargePageList, params }, { apiUrl: mockUrl });

export const getChargeListByStudent = (params?: RoleParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.ChargePageList, params }, { apiUrl: mockUrl });

export const getSourceListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.SourcePageList, params }, { apiUrl: mockUrl });

export const getCourseListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.CoursePageList, params }, { apiUrl: mockUrl });

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
