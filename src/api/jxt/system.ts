import {
  AccountParams,
  AccountListGetResultModel,
  RolePageParams,
  RolePageListGetResultModel,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { mockUrl = '' } = useGlobSetting();

enum Api {
  IsAccountExist = '/system/accountExist',
  DeptList = '/system/getDeptList',
  setRoleStatus = '/system/setRoleStatus',
  MenuList = '/system/getMenuList',
  RolePageList = '/role/list',
  GetAllRoleList = '/system/getAllRoleList',

  AccountAdd = '/user/add',
  AccountList = '/user/list',
}

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params }, { apiUrl: mockUrl });

export const addAccount = (params?: AccountParams) =>
  defHttp.post<AccountListGetResultModel>({ url: Api.AccountAdd, params }, { apiUrl: mockUrl });

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params }, { apiUrl: mockUrl });
