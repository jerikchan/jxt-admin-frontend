import { RolePageParams, RolePageListGetResultModel } from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { mockUrl = '' } = useGlobSetting();

enum Api {
  CustomerPageList = '/customer/list',
  SourcePageList = '/source/list',
  CoursePageList = '/course/list',

  AddSource = '/source/add',
  UpdateSource = '/source/update',
  DeleteSource = '/source/delete',
  DetailSource = '/source/detail',
}

export const getCustomerListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>(
    { url: Api.CustomerPageList, params },
    { apiUrl: mockUrl },
  );

export const getSourceListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.SourcePageList, params }, { apiUrl: mockUrl });

export const getCourseListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.CoursePageList, params }, { apiUrl: mockUrl });

export const addSource = (params?: {}) =>
  defHttp.post<{}>({ url: Api.AddSource, params }, { apiUrl: mockUrl });

export const updateSource = (params?: {}) =>
  defHttp.post<{}>({ url: Api.UpdateSource, params }, { apiUrl: mockUrl });

export const deleteSource = (params?: {}) =>
  defHttp.post<{}>({ url: Api.DeleteSource, params }, { apiUrl: mockUrl });

export const detailSource = (params?: {}) =>
  defHttp.get<{}>({ url: Api.DetailSource, params }, { apiUrl: mockUrl });
