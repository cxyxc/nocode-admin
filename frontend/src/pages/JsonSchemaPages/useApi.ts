import { message } from 'antd';
import { getData, addData, updateData, removeData } from '@/services/common/data';
import { JsonSchema } from './jsonSchema';

type Fields = any;

/**
 * 查询
 *
 * @param fields
 */
const handleQuery = async (fields: Fields) => {
  return getData({ ...fields });
};

/**
 * 添加
 *
 * @param queryParams
 * @param bodyParams
 */
const handleAdd = async (queryParams: Fields, bodyParams: Fields) => {
  const hide = message.loading('正在添加');
  const res = await addData(queryParams, bodyParams);
  hide();
  message.success('添加成功');
  return res;
};

/**
 * 更新
 *
 * @param queryParams
 * @param bodyParams
 */
const handleUpdate = async (queryParams: Fields, bodyParams: Fields) => {
  const hide = message.loading('正在更新');
  const res = await updateData(queryParams, bodyParams);
  hide();
  message.success('更新成功');
  return res;
};

/**
 * 删除
 *
 * @param queryParams
 */
const handleRemove = async (queryParams: Fields) => {
  const hide = message.loading('正在删除');
  const res = await removeData(queryParams);
  hide();
  message.success('删除成功，即将刷新');
  return res;
};

// 获取当前页面的 schema 引用
export default function useApi(jsonSchema: JsonSchema, actionRef: any) {
  const rowKey = jsonSchema.rowKey;
  const generateFields = (fields: Fields) => {
    return {
      ...fields,
      id: fields[rowKey],
      table: jsonSchema.table,
    };
  };

  const handleWrapper = (fn: Function) => (fields: Fields) => {
    const { id, table, ...others } = generateFields(fields);
    return fn({ id, table }, others).then((res: any) => {
      if (res.code === 0) actionRef.current.reload();
    });
  };

  return {
    handleQuery: (fields: Fields) => handleQuery(generateFields(fields)),
    handleAdd: handleWrapper(handleAdd),
    handleUpdate: handleWrapper(handleUpdate),
    handleRemove: handleWrapper(handleRemove),
  };
}
