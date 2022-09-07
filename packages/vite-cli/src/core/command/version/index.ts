import program from "../../program"
import chalk from "chalk"

import {
  VERSION,
  VITE_CLI_VERSION,
  BUILD_DATE
} from "../../../shared/constant"

function getVersionView() {
  chalk.bgBlue(VITE_CLI_VERSION)
  chalk.bgCyan(VERSION)
  chalk.bgGreen(BUILD_DATE)
  return ""
}

const createVersionCommand = async () => {
  program
    .version(getVersionView(), "-v --version")
    .usage("<command> [options]")
    .action(() => {
      chalk.bgCyan(VERSION)
      chalk.bgGreen(BUILD_DATE)
    })
}
export default createVersionCommand
