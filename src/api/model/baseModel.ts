export interface BasicPageParams {
  /** 当前页 */
  page: number;
  /** 每页大小 */
  pageSize: number;
}

export interface BasicFetchResult<T> {
  /** 消息 */
  msg: string;
  result: {
    /** 总页数 */
    total: number;
    /** 当前页 */
    totalPage: number;
    /** 数据项列表 */
    items: T[];
  };
  /** 状态码 */
  code: number;
  /** 状态 */
  type: string;
}
