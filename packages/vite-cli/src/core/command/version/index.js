import program from "../../program.js"
import chalk from "chalk"
import {
  VERSION,
  VITE_CLI_VERSION,
  BUILD_DATE
} from "../../../shared/constant.js"
function getVersionView() {
  chalk.bgBlue(VITE_CLI_VERSION)
  chalk.bgGreen(VERSION)
  chalk.bgCyan(BUILD_DATE)
  return ""
}
const createVersionCommand = async () => {
  program
    .version(getVersionView(), "-v --version")
    .usage("<command> [options]")
    .action(() => {
      chalk.bgGreen(VERSION)
      chalk.bgCyan(BUILD_DATE)
    })
}
export default createVersionCommand
