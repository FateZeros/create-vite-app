import createQuestion from "../../utils/question"
import frames from "./options/frames"
import packageTools from "./options/package-tools"
import { options } from "../../shared/options"

async function createProjectQuestions(): Promise<void> {
  try {
    // 选择框架
    await createQuestion(frames)
    // 包管理器
    await createQuestion(packageTools)
    // 根据不同的选项进行配置
    console.log(options, "==== 最终的选项配置 ====")
  } catch (e: any) {
    console.log(e.message)
    process.exit(1)
  }
  return Promise.resolve()
}

export default createProjectQuestions
