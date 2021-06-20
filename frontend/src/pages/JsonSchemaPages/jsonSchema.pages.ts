import { ProColumns } from '@ant-design/pro-table';

export type JsonSchema = {
  table: string;
  rowKey: string;
  columns: ProColumns[];
}

// 可以存储在数据库中的 CRUD 模块的模板数据
const jsonSchema: JsonSchema = {
  table: 'pages',
  rowKey: 'id',
  columns: [
    {
      title: '页面标识',
      dataIndex: 'key',
    },
    {
      title: '页面结构',
      dataIndex: 'schema',
      valueType: 'jsonCode'
    }
  ],
};

export default jsonSchema;
