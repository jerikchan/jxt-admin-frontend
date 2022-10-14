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

  AccountAdd = '/user/add',
  AccountList = '/user/list',
  AccountDetail = '/user/detail',

  AreaPageList = '/area/list',
  DeptPageList = '/dept/list',
  ParcelPageList = '/parcel/list',
  AuthPageList = '/auth/list',
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
