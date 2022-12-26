import { RolePageParams, RolePageListGetResultModel } from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';
import { useGlobSetting } from '/@/hooks/setting';

const { mockUrl = '' } = useGlobSetting();

enum Api {
  ExamPageList = '/exam/list',

  AddExamInfo = '/exam/add',
  UpdateExamInfo = '/exam/update',
  DeleteExamInfo = '/exam/delete',
  DetailExamInfo = '/exam/detail',

  ExamFastImport = '/import/exam/record',
  ExamExcelExport = '/export/excel/exam/records',
}

export const getExamListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.ExamPageList, params }, { apiUrl: mockUrl });

export const addExamInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.AddExamInfo, params }, { apiUrl: mockUrl });

export const updateExamInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.UpdateExamInfo, params }, { apiUrl: mockUrl });

export const deleteExamInfo = (params?: {}) =>
  defHttp.post<{}>({ url: Api.DeleteExamInfo, params }, { apiUrl: mockUrl });

export const detailExamInfo = (params?: {}) =>
  defHttp.get<{}>({ url: Api.DetailExamInfo, params }, { apiUrl: mockUrl });

export const fastImportExam = (params?: {}) =>
  defHttp.post<{}>({ url: Api.ExamFastImport, params }, { apiUrl: mockUrl });

export const excelExportExam = (params?: {}) =>
  defHttp.post<{}>({ url: Api.ExamExcelExport, params }, { apiUrl: mockUrl });
