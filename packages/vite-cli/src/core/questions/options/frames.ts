import chalk from "chalk"

export default {
  name: "frame",
  type: "select",
  message: "Choose your framework",
  choices: [
    { title: chalk.green("Vue"), value: "vue" },
    { title: chalk.green("React"), value: "React" }
  ]
}
