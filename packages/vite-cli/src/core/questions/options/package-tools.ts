import { shouldUsePnpm } from "../../../utils/tools"
import { shouldUseYarn } from "../../../utils/tools"
const isPnpmInstalled = shouldUsePnpm()
const isYarnInstalled = shouldUseYarn()

export default {
  name: "package",
  type: "select",
  message: "Which package manager tool do you want to use?",
  choices: [
    {
      title: isPnpmInstalled ? "Pnpm" : "Pnpm (pnpm not install)",
      value: "pnpm"
    },
    {
      title: isYarnInstalled ? "Yarn" : "Yarn (yarn not install)",
      value: "yarn"
    },
    { title: "Npm", value: "npm" }
  ]
}
