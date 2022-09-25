import { IOptions, options } from "../shared/options"
import prompts from "prompts"

export default async function createQuestion(question: any): Promise<IOptions> {
  const result = await prompts(question, {
    onCancel: () => {
      throw new Error("❌" + " operation cancelled")
    }
  })
  Object.assign(options, result)
  return Promise.resolve(options)
}
