"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const program_1 = __importDefault(require("../../program"));
async function createCommand() {
  program_1.default
    .description("init Vue3 + Vite3 + Typescript project   📑  📑")
    .action(async () => {
      console.log("create project");
      // createProject()
    });
}
exports.default = createCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29yZS9jb21tYW5kL2NyZWF0ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDREQUFtQztBQUNwQixLQUFLLFVBQVUsYUFBYTtJQUN6QyxpQkFBTztTQUNKLFdBQVcsQ0FBQyxpREFBaUQsQ0FBQztTQUM5RCxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUU7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQzdCLGtCQUFrQjtJQUNwQixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUM7QUFQRCxnQ0FPQyJ9
