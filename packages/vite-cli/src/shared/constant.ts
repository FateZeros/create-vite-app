import PKG = require("../../package.json");
const VITE_CLI_VERSION = PKG.version
const JZZX_NAME = PKG.name
import { getNowDate } from "../utils/tools"

const VERSION = `\n\t\t🌱🌱 Published ${PKG.version} Build @ VITE-CLI.com 🌱🌱`
const BUILD_DATE = `\n\t\t\t🌱🌱 Build last date: ${getNowDate()} 🌱🌱`

export { PKG, VITE_CLI_VERSION, JZZX_NAME, VERSION, BUILD_DATE }
