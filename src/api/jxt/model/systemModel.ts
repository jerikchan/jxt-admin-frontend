import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel';

export type AccountParams = BasicPageParams & {
  code?: string;
  name?: string;
};

export interface AccountListItem {
  /** 用户住址 */
  address?: string;
  /** 用户账号 */
  code: string;
  /** 用户所属部门，一般不能为空但是特殊情况允许 */
  deptIds?: string[];
  /** 用户邮箱 */
  email?: string;
  /** 用户id，需要编辑时需要传 */
  id?: string;
  /** 用户联系方式 */
  mobile?: string;
  /** 用户名字，真实姓名 */
  name: string;
  /** 用户在线状态，该值一般用于展现用 */
  onlineStatus?: number;
  /** 用户账号密码,不填默认不修改，新增时需要填 */
  pwd?: string;
  /** 用户所属角色。测试时可以允许为空 */
  roleIds?: number[];
  /** 用户账号状态，0代表启用， 1代表禁用 */
  status?: 0 | 1;
  /** 用户微信号 */
  weChat?: string;
}

/**
 * @description: Request list return value
 */
export type AccountListGetResultModel = BasicFetchResult<AccountListItem>;
