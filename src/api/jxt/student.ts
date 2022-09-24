import { RolePageParams, RolePageListGetResultModel } from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { mockUrl = '' } = useGlobSetting();

enum Api {
  StudentPageList = '/student/list',
  StudentLabelPageList = '/label/list',

  AddStudentInfo = '/student/add',
  UpdateStudentInfo = '/student/update',
  DeleteStudentInfo = '/student/delete',
  DetailStudentInfo = '/student/detail',

  AddLabelInfo = '/label/add',
  UpdateLabelInfo = '/label/update',
  DeleteLabelInfo = '/label/delete',
  DetailLabelInfo = '/label/detail',
}

export const getStudentListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>(
    { url: Api.StudentPageList, params },
    { apiUrl: mockUrl },
  );

export const getStudentLabelListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>(
    { url: Api.StudentLabelPageList, params },
    { apiUrl: mockUrl },
  );

export const addStudentInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.AddStudentInfo, params }, { apiUrl: mockUrl });

export const updateStudentInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.UpdateStudentInfo, params }, { apiUrl: mockUrl });

export const deleteStudentInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.DeleteStudentInfo, params }, { apiUrl: mockUrl });

export const detailStudentInfo = (params?: {}) =>
  defHttp.get<{}>({ url: Api.DetailStudentInfo, params }, { apiUrl: mockUrl });

export const addLabelInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.AddLabelInfo, params }, { apiUrl: mockUrl });

export const updateLabelInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.UpdateLabelInfo, params }, { apiUrl: mockUrl });

export const deleteLabelInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.DeleteLabelInfo, params }, { apiUrl: mockUrl });

export const detailLabelInfo = (params?: {}) =>
  defHttp.get<{}>({ url: Api.DetailLabelInfo, params }, { apiUrl: mockUrl });
