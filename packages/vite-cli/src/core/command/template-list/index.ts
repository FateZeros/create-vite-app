import program from "../../program"
// import chalk from "chalk"

// import {  } from "../../../shared/constant"

const createListOptions = async () => {
  program.option("-l, --list", "可供选择的模版项目").action((options: any) => {
    if (options.list) {
      console.log("模版")
    }
  })
}
export default createListOptions
