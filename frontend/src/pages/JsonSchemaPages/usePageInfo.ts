import { useModel } from 'umi';
import { ProColumns } from '@ant-design/pro-table';
import { useParams } from 'umi';

export type PageJsonSchema = {
  table: string;
  rowKey: string;
  columns: ProColumns[];
};

export default function usePageInfo(): PageJsonSchema {
  const { initialState = {} } = useModel('@@initialState');
  const params: any = useParams();
  const pageInfo = initialState.pageInfo;
  const jsonSchema: PageJsonSchema =
    pageInfo.find((item: any) => item.key === params.key)?.schema || {};
  return jsonSchema;
}
