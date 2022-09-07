import program from "../../program"
export default async function createCommand() {
  program
    .description("init Vue3 + Vite3 + Typescript project   📑  📑")
    .action(async () => {
      console.log("create project")
      // createProject()
    })
}
