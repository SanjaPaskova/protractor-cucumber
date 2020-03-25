"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const page_helper_1 = require("../../../components/html/page-helper");
const common_po_1 = require("./common.po");
const step_logger_1 = require("../../../logger/step-logger");
class CommonPageHelper {
    static logout() {
        return __awaiter(this, void 0, void 0, function* () {
            step_logger_1.StepLogger.step('Select logout from the profile down arrow');
            yield protractor_1.browser.sleep(page_helper_1.PageHelper.timeout.xs);
            yield page_helper_1.PageHelper.click(common_po_1.CommonPage.userProfile);
            yield page_helper_1.PageHelper.click(common_po_1.CommonPage.logout);
        });
    }
}
exports.CommonPageHelper = CommonPageHelper;
//# sourceMappingURL=common-page.helper.js.map