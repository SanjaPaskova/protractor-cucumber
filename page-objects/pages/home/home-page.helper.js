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
const expectation_helper_1 = require("../../../components/misc-utils/expectation-helper");
const base_page_helper_1 = require("../base-page.helper");
const home_page_constant_1 = require("./home-page.constant");
const home_po_1 = require("./home.po");
const wait_helper_1 = require("../../../components/html/wait-helper");
const element_helper_1 = require("../../../components/html/element-helper");
class HomePageHelper extends base_page_helper_1.BasePageHelper {
    static verifyNavigation() {
        return __awaiter(this, void 0, void 0, function* () {
            yield expectation_helper_1.ExpectationHelper.verifyPageNavigation(home_po_1.HomePage.mainContainer, home_page_constant_1.HomePageConstant.pageName);
            yield element_helper_1.ElementHelper.clickIfPresent(home_po_1.HomePage.base.closeModal);
        });
    }
    static clickFoldersLabels() {
        return __awaiter(this, void 0, void 0, function* () {
            yield wait_helper_1.WaitHelper.waitForElementToBeDisplayed(home_po_1.HomePage.returnFolder(home_page_constant_1.HomePageConstant.Folders.inbox));
            yield element_helper_1.ElementHelper.click(home_po_1.HomePage.folders.foldersLabelsLink);
        });
    }
    goTo() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(this.url());
        });
    }
    url() {
        return '/inbox';
    }
}
exports.HomePageHelper = HomePageHelper;
//# sourceMappingURL=home-page.helper.js.map