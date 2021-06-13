import React, { useState, useRef } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { EditableProTable } from '@ant-design/pro-table';
import { omit } from 'lodash';
import jsonSchema from './jsonSchema';
import { getNewRowKey, isNewRowKey } from './utils';
import useApi from './useApi';

const JsonSchemaPages: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [current, setCurrent] = useState(1)

  const { handleQuery, handleAdd, handleUpdate, handleRemove } = useApi(jsonSchema, actionRef)
  const rowKey = jsonSchema.rowKey || 'id'
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
