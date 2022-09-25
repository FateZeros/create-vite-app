import program from "../../program"
import createProject from "./create-project"

export default async function createCommand() {
  // program.description("init Vue3 + Vite3 + Typescript project   📑  📑").action(async () => {
  //   createProject();
  // });
  program
    .command("create <app-name>")
    .description("创建一个基于 Vue3 + vite + Typescript 的项目")
    .action(async (name: string) => {
      await createProject(name)
    })
}
