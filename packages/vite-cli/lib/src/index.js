"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const program_1 = __importDefault(require("./core/program"));
// import viteCliCoreCommand from "./core/command"
// program.version("1.0.0", "-V, --version").usage("<command> [options]")
// program
//   .command("create <app-name>")
//   .description("create a new project powered by project-cli-service")
//   .option("-d, --default", "Skip prompts and use default preset")
//   .action(name => {
//     console.log(chalk.blue(`${name}项目正在创建中...`))
//   })
// program.parse(process.argv)
async function createViteCliCommand() {
  // await viteCliCoreCommand()
  program_1.default.parse(process.argv);
}
createViteCliCommand();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw2REFBb0M7QUFDcEMsa0RBQWtEO0FBRWxELHlFQUF5RTtBQUV6RSxVQUFVO0FBQ1Ysa0NBQWtDO0FBQ2xDLHdFQUF3RTtBQUN4RSxvRUFBb0U7QUFDcEUsc0JBQXNCO0FBQ3RCLG1EQUFtRDtBQUNuRCxPQUFPO0FBRVAsOEJBQThCO0FBRTlCLEtBQUssVUFBVSxvQkFBb0I7SUFDakMsNkJBQTZCO0lBQzdCLGlCQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUM3QixDQUFDO0FBRUQsb0JBQW9CLEVBQUUsQ0FBQSJ9
