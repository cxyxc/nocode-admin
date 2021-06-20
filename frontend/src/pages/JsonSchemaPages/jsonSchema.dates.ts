import { ProColumns } from '@ant-design/pro-table';

export type JsonSchema = {
  table: string;
  rowKey: string;
  columns: ProColumns[];
}

// 可以存储在数据库中的 CRUD 模块的模板数据
const jsonSchema: JsonSchema = {
  table: 'datas',
  rowKey: 'id',
  columns: [
    {
      title: '名称',
      dataIndex: 'name',
      tip: '名称是唯一的 key',
    },
    {
      title: '描述',
      dataIndex: 'description',
      valueType: 'textarea',
    },
    {
      title: '数量',
      dataIndex: 'total',
      valueType: 'digit',
      sorter: true,
      hideInForm: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      hideInForm: true,
      valueEnum: {
        0: {
          text: '关闭',
          status: 'Default',
        },
        1: {
          text: '运行中',
          status: 'Processing',
        },
        2: {
          text: '已上线',
          status: 'Success',
        },
        3: {
          text: '异常',
          status: 'Error',
        },
      },
    },
    {
      title: '上次编辑时间',
      sorter: true,
      dataIndex: 'updated_at',
      valueType: 'dateTime',
    },
  ],
};

export default jsonSchema;
