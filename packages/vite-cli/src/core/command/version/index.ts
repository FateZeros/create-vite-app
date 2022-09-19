import program from "../../program"
import chalk from "chalk"

import {
  VERSION,
  VITE_CLI_VERSION,
  BUILD_DATE
} from "../../../shared/constant"
import { printLog } from "../../../utils/log"

function getVersionView() {
  printLog(chalk.bgBlue(VITE_CLI_VERSION))
  printLog(chalk.bgCyan(VERSION))
  printLog(chalk.bgGreen(BUILD_DATE))
  return ""
}

const createVersionCommand = async () => {
  program
    .version(getVersionView(), "-v --version")
    .usage("<command> [options]")
    .action(() => {
      printLog(chalk.bgCyan(VERSION))
      printLog(chalk.bgGreen(BUILD_DATE))
    })
}
export default createVersionCommand
