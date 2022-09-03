#!/usr/bin/env node
import { Command } from "commander"
// const Chalk = require("chalk");

const program = new Command()

program.version("1.0.0", "-V, --version").usage("<command> [options]")

program
  .command("create <app-name>")
  .description("create a new project powered by project-cli-service")
  .option("-d, --default", "Skip prompts and use default preset")
  .action((name: any) => {
    // console.log(chalk.blue(`${name}项目正在创建中...`))
    console.log(`${name}项目正在创建中...`)
  })

program.parse(process.argv)
