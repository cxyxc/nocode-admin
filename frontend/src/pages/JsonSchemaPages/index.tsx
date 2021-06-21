import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import { omit } from 'lodash';
import { getNewRowKey, isNewRowKey } from './utils';
import useApi from './useApi';
import usePageInfo from './usePageInfo';
import ProSkeleton from '@ant-design/pro-skeleton';
import useRouteChange from './useRouteChange';

const JsonSchemaPages: React.FC = () => {
  const jsonSchema = usePageInfo()
  const actionRef = useRef<ActionType>();
  const { handleQuery, handleAdd, handleUpdate, handleRemove } = useApi(jsonSchema, actionRef)
  const [current, setCurrent] = useState(1)

  // 页面路由变化时，恢复表单初始态并重查数据
  // TODO: 后续考虑路由变化时卸载组件重绘
  useRouteChange(() => {
    if (actionRef.current?.reset && actionRef.current.reload) {
      setCurrent(1)
      actionRef.current.reset()
      actionRef.current.reload()
    }
  })

  // 未获取到页面 schema 前渲染骨架屏操作
  if (!jsonSchema.rowKey) return <ProSkeleton type="list" />

  const rowKey = jsonSchema.rowKey
  const columns: ProColumns[] = jsonSchema.columns.concat([
    {
      title: '操作',
      valueType: 'option',
      width: 200,
      render: (text, record, _, action) => [
        <a
          key="editable"
          onClick={() => {
            action?.startEditable?.(record[rowKey]);
          }}
        >
          编辑
        </a>,
      ],
    },
  ]);
  return (
    <PageContainer>
      <EditableProTable
        actionRef={actionRef}
        rowKey={rowKey}
        search={{
          labelWidth: 120,
        }}
        recordCreatorProps={current > 1 ? false : {
          position: 'top',
          record: () => ({ [rowKey]: getNewRowKey }),
        }}
        request={handleQuery}
        columns={columns}
        pagination={{ onChange: (page) => setCurrent(page) }}
        editable={{
          onSave: (key, row) => {
            const data = omit(row, rowKey)
            if (isNewRowKey(String(key))) {
              return handleAdd(data)
            } else {
              return handleUpdate(row)
            }
          },
          onDelete: (_, row) => {
            return handleRemove(row)
          },
        }}
      />
    </PageContainer>
  );
};

export default JsonSchemaPages;
