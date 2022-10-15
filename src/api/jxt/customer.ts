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
  SourceDicList = '/source/dic',

  AddCourse = '/course/add',
  UpdateCourse = '/course/update',
  DeleteCourse = '/course/delete',
  DetailCourse = '/course/detail',
  CourceDicList = '/course/dic',

  AddCustomer = '/customer/add',
  UpdateCustomer = '/customer/update',
  DeleteCustomer = '/customer/delete',
  DetailCustomer = '/customer/detail',
}

export const getCustomerListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>(
    { url: Api.CustomerPageList, params },
    { apiUrl: mockUrl },
  );

export const addCustomer = (params?: {}) =>
  defHttp.post<{}>({ url: Api.AddCustomer, params }, { apiUrl: mockUrl });

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

export const addCourse = (params?: {}) =>
  defHttp.post<{}>({ url: Api.AddCourse, params }, { apiUrl: mockUrl });

export const UpdateCourse = (params?: {}) =>
  defHttp.post<{}>({ url: Api.UpdateCourse, params }, { apiUrl: mockUrl });

export const deleteCourse = (params?: {}) =>
  defHttp.post<{}>({ url: Api.DeleteCourse, params }, { apiUrl: mockUrl });

export const detailCourse = (params?: {}) =>
  defHttp.get<{}>({ url: Api.DetailCourse, params }, { apiUrl: mockUrl });

export const updateCustomer = (params?: {}) =>
  defHttp.post<{}>({ url: Api.UpdateCustomer, params }, { apiUrl: mockUrl });

export const deleteCustomer = (params?: {}) =>
  defHttp.post<{}>({ url: Api.DeleteCustomer, params }, { apiUrl: mockUrl });

export const detailCustomer = (params?: {}) =>
  defHttp.get<{}>({ url: Api.DetailCustomer, params }, { apiUrl: mockUrl });

export const getSourceDicList = (params?: {}) =>
  defHttp.get<{}>({ url: Api.SourceDicList, params }, { apiUrl: mockUrl });

export const getCourseDicList = (params?: {}) =>
  defHttp.get<{}>({ url: Api.CourceDicList, params }, { apiUrl: mockUrl });
