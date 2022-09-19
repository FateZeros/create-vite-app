/**
 * 获取当前日期
 */
export function getNowDate(): string {
  const nowDate = `${new Date().getFullYear()}-${
    new Date().getMonth() + 1
  }-${new Date().getDate()}`
  return nowDate
}
