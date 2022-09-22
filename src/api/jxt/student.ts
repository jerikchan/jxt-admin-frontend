import { RolePageParams, RolePageListGetResultModel } from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { mockUrl = '' } = useGlobSetting();

enum Api {
  StudentPageList = '/student/list',
}

export const getStudentListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>(
    { url: Api.StudentPageList, params },
    { apiUrl: mockUrl },
  );
