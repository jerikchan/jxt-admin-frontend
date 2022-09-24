import { RolePageParams, RolePageListGetResultModel } from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { mockUrl = '' } = useGlobSetting();

enum Api {
  CoachPageList = '/coach/list',
  SourcePageList = '/source/list',
  CoursePageList = '/course/list',

  AddCoachInfo = '/coach/add',
  UpdateCoachInfo = '/coach/update',
  DeleteCoachInfo = '/coach/delete',
  DetailCoachInfo = '/coach/detail',
}

export const getCoachListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.CoachPageList, params }, { apiUrl: mockUrl });

export const getSourceListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.SourcePageList, params }, { apiUrl: mockUrl });

export const getCourseListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.CoursePageList, params }, { apiUrl: mockUrl });

export const addCoachInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.AddCoachInfo, params }, { apiUrl: mockUrl });

export const updateCoachInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.UpdateCoachInfo, params }, { apiUrl: mockUrl });

export const deleteCoachInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.DeleteCoachInfo, params }, { apiUrl: mockUrl });

export const detailCoachInfo = (params?: {}) =>
  defHttp.get<{}>({ url: Api.DetailCoachInfo, params }, { apiUrl: mockUrl });
