"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const program_1 = __importDefault(require("../../program"));
async function helpCommand() {
  program_1.default.option(
    "-d --dest <dest>",
    "a destination folder, 例如 -d /src/components 获取对应目标路径 必填项"
  );
  program_1.default.option(
    "-f --framework <framework>",
    "选择你的框架 例如：-f vue3"
  );
  program_1.default.on("--help", () => {
    console.log("");
    console.log("Other");
    console.log("   otherOptions");
  });
}
exports.default = helpCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29yZS9jb21tYW5kL2hlbHAvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0REFBbUM7QUFDcEIsS0FBSyxVQUFVLFdBQVc7SUFDdkMsaUJBQU8sQ0FBQyxNQUFNLENBQ1osa0JBQWtCLEVBQ2xCLDBEQUEwRCxDQUMzRCxDQUFBO0lBQ0QsaUJBQU8sQ0FBQyxNQUFNLENBQUMsNEJBQTRCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQTtJQUNqRSxpQkFBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtJQUNoQyxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFYRCw4QkFXQyJ9
