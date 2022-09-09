"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const program_1 = __importDefault(require("../../program"));
const chalk_1 = __importDefault(require("chalk"));
const constant_1 = require("../../../shared/constant");
function getVersionView() {
  chalk_1.default.bgBlue(constant_1.VITE_CLI_VERSION);
  chalk_1.default.bgCyan(constant_1.VERSION);
  chalk_1.default.bgGreen(constant_1.BUILD_DATE);
  return "";
}
const createVersionCommand = async () => {
  program_1.default
    .version(getVersionView(), "-v --version")
    .usage("<command> [options]")
    .action(() => {
      chalk_1.default.bgCyan(constant_1.VERSION);
      chalk_1.default.bgGreen(constant_1.BUILD_DATE);
    });
};
exports.default = createVersionCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvY29yZS9jb21tYW5kL3ZlcnNpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0REFBbUM7QUFDbkMsa0RBQXlCO0FBRXpCLHVEQUlpQztBQUVqQyxTQUFTLGNBQWM7SUFDckIsZUFBSyxDQUFDLE1BQU0sQ0FBQywyQkFBZ0IsQ0FBQyxDQUFBO0lBQzlCLGVBQUssQ0FBQyxNQUFNLENBQUMsa0JBQU8sQ0FBQyxDQUFBO0lBQ3JCLGVBQUssQ0FBQyxPQUFPLENBQUMscUJBQVUsQ0FBQyxDQUFBO0lBQ3pCLE9BQU8sRUFBRSxDQUFBO0FBQ1gsQ0FBQztBQUVELE1BQU0sb0JBQW9CLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDdEMsaUJBQU87U0FDSixPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsY0FBYyxDQUFDO1NBQ3pDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztTQUM1QixNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ1gsZUFBSyxDQUFDLE1BQU0sQ0FBQyxrQkFBTyxDQUFDLENBQUE7UUFDckIsZUFBSyxDQUFDLE9BQU8sQ0FBQyxxQkFBVSxDQUFDLENBQUE7SUFDM0IsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFDRCxrQkFBZSxvQkFBb0IsQ0FBQSJ9
