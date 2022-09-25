import PKG = require("../../package.json");
const PKG_NAME = PKG.name
import { getNowDate } from "../utils/tools"

const VITE_CLI_VERSION = `
    🌱🌱 Published ${PKG.version} Build ${PKG_NAME} 🌱🌱 /r
    🌱🌱 Build last date: ${getNowDate()} 🌱🌱
`

export { PKG, VITE_CLI_VERSION, PKG_NAME }
