import { ProColumns } from '@ant-design/pro-table';

export type JsonSchema = {
  table: string;
  rowKey: string;
  columns: ProColumns[];
}

// 可以存储在数据库中的 CRUD 模块的模板数据
const jsonSchema: JsonSchema = {
  table: 'menus',
  rowKey: 'id',
  columns: [
    {
      title: '名称',
      dataIndex: 'name',
    },
    {
      title: '路径',
      dataIndex: 'path',
    }
  ],
};

export default jsonSchema;
