export const PKG = import("../../package.json")
export const VITE_CLI_VERSION = PKG.version
export const JZZX_NAME = PKG.name

export const VERSION = `\n\t\t🌱🌱 Published${PKG.version}Build @ VITE-CLI.com 🌱🌱`
export const BUILD_DATE = `\n\t\t\t🌱🌱 Build last date: ${new Date().getFullYear()}-${
  new Date().getMonth() + 1
}-${new Date().getDate()} 🌱🌱`
