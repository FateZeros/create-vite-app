"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BUILD_DATE =
  exports.VERSION =
  exports.JZZX_NAME =
  exports.VITE_CLI_VERSION =
  exports.PKG =
    void 0;
const PKG = require("../../package.json");
exports.PKG = PKG;
const VITE_CLI_VERSION = PKG.version;
exports.VITE_CLI_VERSION = VITE_CLI_VERSION;
const JZZX_NAME = PKG.name;
exports.JZZX_NAME = JZZX_NAME;
const VERSION = `\n\t\t🌱🌱 Published${PKG.version}Build @ VITE-CLI.com 🌱🌱`;
exports.VERSION = VERSION;
const BUILD_DATE = `\n\t\t\t🌱🌱 Build last date: ${new Date().getFullYear()}-${
  new Date().getMonth() + 1
}-${new Date().getDate()} 🌱🌱`;
exports.BUILD_DATE = BUILD_DATE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvc2hhcmVkL2NvbnN0YW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDBDQUEyQztBQVNsQyxrQkFBRztBQVJaLE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQTtBQVF0Qiw0Q0FBZ0I7QUFQOUIsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQTtBQU9NLDhCQUFTO0FBTHpDLE1BQU0sT0FBTyxHQUFHLHVCQUF1QixHQUFHLENBQUMsT0FBTywyQkFBMkIsQ0FBQTtBQUtsQywwQkFBTztBQUpsRCxNQUFNLFVBQVUsR0FBRyxpQ0FBaUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFDMUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUMxQixJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQTtBQUVxQixnQ0FBVSJ9
