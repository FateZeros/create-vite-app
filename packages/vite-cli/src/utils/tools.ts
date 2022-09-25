import { execSync } from "child_process"

/**
 * 获取当前日期
 */
export function getNowDate(): string {
  const nowDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
  return nowDate
}

/**
 * 判断是否可以使用 pnpm
 * @returns boolean
 */
export function shouldUsePnpm(): boolean {
  try {
    const userAgent = process.env.npm_config_user_agent
    if (userAgent && userAgent.startsWith("pnpm")) {
      return true
    }
    execSync("pnpm --version", { stdio: "ignore" })
    return true
  } catch (e) {
    return false
  }
}

/**
 * 判断是否可以使用 yarn
 * @returns boolean
 */
export function shouldUseYarn(): boolean {
  try {
    const userAgent = process.env.npm_config_user_agent
    if (userAgent && userAgent.startsWith("yarn")) {
      return true
    }
    execSync("yarnpkg --version", { stdio: "ignore" })
    return true
  } catch (e) {
    return false
  }
}
