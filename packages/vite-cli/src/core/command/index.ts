import createVersionCommand from "./version"
// import helpCommand from "./help"
import createCommand from "./create"
import createListOptions from "./template-list"
export default function viteCliCoreCommand() {
  // helpCommand()
  createVersionCommand()
  createListOptions()
  createCommand()
}
