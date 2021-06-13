
/**
 * 新增时创建 rowKey
 *
 * @param fields
 */
export const getNewRowKey = () => {
  return `__@@__${(Math.random() * 1000000).toFixed(0)}`
}
export const isNewRowKey = (rowKey: string) => {
  return rowKey.includes('__@@__')
}
