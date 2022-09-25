import program from "../../program"
import chalk from "chalk"

import { VITE_CLI_VERSION } from "../../../shared/constant"

const createVersionCommand = async () => {
  program.version(chalk.cyan(VITE_CLI_VERSION), "-v --version").usage("<command> [options]")
}
export default createVersionCommand
