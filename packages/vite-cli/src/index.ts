import program from "./core/program"
import viteCliCoreCommand from "./core/command"

// program.version("1.0.0", "-V, --version").usage("<command> [options]")

// program
//   .command("create <app-name>")
//   .description("create a new project powered by project-cli-service")
//   .option("-d, --default", "Skip prompts and use default preset")
//   .action((name: any) => {
//     console.log(name, 1111);
//   })

// program.parse(process.argv)

async function createViteCliCommand() {
  await viteCliCoreCommand()
  program.parse(process.argv)
}

createViteCliCommand()
