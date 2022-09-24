import program from "../../program"
import chalk from "chalk"

import { VITE_CLI_VERSION, BUILD_DATE } from "../../../shared/constant"

function getVersionView() {
  console.log(chalk.cyan(VITE_CLI_VERSION))
  console.log(chalk.green(BUILD_DATE))
  return ""
}

const createVersionCommand = async () => {
  program.version(getVersionView(), "-v --version").usage("<command> [options]")
}
export default createVersionCommand
