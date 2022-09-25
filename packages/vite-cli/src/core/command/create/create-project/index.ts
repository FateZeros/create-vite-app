import createProjectQuestions from "../../../questions"
import hasDir from "../../../../utils/has-dir"
import * as shell from "shelljs"
import chalk from "chalk"

export default async function (projectName: string): Promise<void> {
  // 判断是否有目录
  await hasDir(projectName)
  // 命令交互
  await createProjectQuestions() // 不共同
  // 创建项目目录
  initProjectDir(projectName)
  // 复制模板

  end(projectName)
}

/**
 * 初始化项目文件夹
 * @param projectName
 */
function initProjectDir(projectName: string): void {
  shell.exec(`mkdir ${projectName}`)
}

/**
 * 项目结束安装
 * @param projectName
 */
function end(projectName: string): void {
  console.log(chalk.green(`Successfully created project ${chalk.yellow(projectName)}`))
  console.log("Get started with the following commands:")
  console.log(`${chalk.green(`cd ${projectName} && npm run serve`)}`)
}
