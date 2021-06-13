// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取数据列表 GET /api/data/${param0} */
export async function getData(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
    /** 排序对象 */
    sorter?: Record<string, any>;
    // path
    table: string;
  },
  options?: { [key: string]: any },
) {
  const { table: param0, ...queryParams } = params;
  return request<API.RuleList>(`/api/data/${param0}`, {
    method: 'GET',
    params: {
      ...queryParams,
      sorter: undefined,
      ...queryParams['sorter'],
    },
    ...(options || {}),
  });
}

/** 新建数据 POST /api/data/${param0} */
export async function addData(
  params: {
    // path
    table: string;
  },
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  const { table: param0, ...queryParams } = params;
  return request<API.RuleListItem>(`/api/data/${param0}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 编辑规则 PUT /api/data/${param0}/${param1} */
export async function updateData(
  params: {
    // path
    table: string;
    id: number;
  },
  body: Record<string, any>,
  options?: { [key: string]: any },
) {
  const { table: param0, id: param1, ...queryParams } = params;
  return request<Record<string, any>>(`/api/data/${param0}/${param1}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/data/${param0}/${param1} */
export async function removeData(
  params: {
    // path
    table: string;
    id: number;
  },
  options?: { [key: string]: any },
) {
  const { table: param0, id: param1, ...queryParams } = params;
  return request<Record<string, any>>(`/api/data/${param0}/${param1}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}
