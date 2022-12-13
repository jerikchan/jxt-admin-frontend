import {
  AccountParams,
  AccountListGetResultModel,
  RolePageParams,
  RolePageListGetResultModel,
  AreaPageParams,
  DeptPageParams,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { mockUrl = '' } = useGlobSetting();

enum Api {
  IsAccountExist = '/system/accountExist',
  DeptList = '/dept/tree',
  setRoleStatus = '/system/setRoleStatus',
  MenuList = '/system/getMenuList',
  RolePageList = '/role/list',
  GetAllRoleList = '/system/getAllRoleList',
  GetParceltListByPage = '/parcel/list',

  AccountAdd = '/user/add',
  AccountList = '/user/list',
  AccountDetail = '/user/detail',

  AreaPageList = '/area/list',

  DeptPageList = '/dept/tree',
  DeptAdd = '/dept/add',
  DeptDelete = '/dept/delete',
  DeptUpdate = '/dept/update',

  ParcelPageList = '/parcel/list',
  AuthPageList = '/auth/list',

  AddPracelInfo = '/parcel/add',
  UpdateParcelInfo = '/parcel/update',
  DeleteParcelInfo = '/parcel/delete',
  DetailParcelInfo = '/parcel/detail',
}

export const getDeptList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.DeptList, params }, { apiUrl: mockUrl });

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params }, { apiUrl: mockUrl });

export const addAccount = (params?: AccountParams) =>
  defHttp.post<AccountListGetResultModel>({ url: Api.AccountAdd, params }, { apiUrl: mockUrl });

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params }, { apiUrl: mockUrl });

export const getAreaListByPage = (params?: AreaPageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.AreaPageList, params }, { apiUrl: mockUrl });

export const getDeptListByPage = (params?: DeptPageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.DeptPageList, params }, { apiUrl: mockUrl });

export const getParceltListByPage = (params?: AreaPageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.ParcelPageList, params }, { apiUrl: mockUrl });

export const getAuthListByPage = (params?: AreaPageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.AuthPageList, params }, { apiUrl: mockUrl });

export const getAccountDetail = (params?: {}) =>
  defHttp.get<{}>({ url: Api.AccountDetail, params }, { apiUrl: mockUrl });

export const addPracelInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.AddPracelInfo, params }, { apiUrl: mockUrl });

export const addDept = (params?: {}) =>
  defHttp.post<{}>({ url: Api.DeptAdd, params }, { apiUrl: mockUrl });

export const updateParcelInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.UpdateParcelInfo, params }, { apiUrl: mockUrl });

export const updateDept = (params?: {}) =>
  defHttp.post<{}>({ url: Api.DeptUpdate, params }, { apiUrl: mockUrl });

export const deleteParcelInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.DeleteParcelInfo, params }, { apiUrl: mockUrl });

export const detailParcelInfo = (params?: {}) =>
  defHttp.get<{}>({ url: Api.DetailParcelInfo, params }, { apiUrl: mockUrl });

export const deleteDept = (params?: {}) =>
  defHttp.post<{}>({ url: Api.DeptDelete, params }, { apiUrl: mockUrl });
