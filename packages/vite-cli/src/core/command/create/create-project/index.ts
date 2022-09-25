// import createProjectQuestions from "../../../questions";
import hasDir from "../../../../utils/has-dir"
import * as shell from "shelljs"

export default async function (projectName: string): Promise<void> {
  // 命令交互
  // await createProjectQuestions() // 不共同
  // 复制模板
  await hasDir(projectName)
  // 初始化项目目录
  initProjectDir(projectName)
}

function initProjectDir(projectName: string): void {
  shell.exec(`mkdir ${projectName}`)
  shell.cd(projectName)
  shell.exec("pnpm init")
}
