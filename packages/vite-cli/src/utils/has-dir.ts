import { access, constants } from "fs"
import chalk = require("chalk");

export default function (name: string): Promise<boolean> {
  return new Promise((resolve) => {
    access(name, constants.F_OK, (error) => {
      if (error) {
        resolve(true)
      } else {
        console.log(chalk.red(`${name} 文件夹已存在！！！`))
        process.exit(1)
      }
    })
  })
}
