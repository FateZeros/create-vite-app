import program from "../../program"
import createProject from "./create-project"

export default async function createCommand() {
  program
    .command("create <project-name>")
    .description("基于 vite-cli 创建项目")
    .action(async (name: string) => {
      await createProject(name)
    })
}
