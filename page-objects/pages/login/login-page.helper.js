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
const base_page_helper_1 = require("../base-page.helper");
const common_po_1 = require("../common/common.po");
const login_po_1 = require("./login.po");
const expectation_helper_1 = require("../../../components/misc-utils/expectation-helper");
const login_page_constant_1 = require("./login-page.constant");
const element_helper_1 = require("../../../components/html/element-helper");
class LoginPageHelper extends base_page_helper_1.BasePageHelper {
    static login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield login_po_1.LoginPage.formControls.username.sendKeys(username);
            yield login_po_1.LoginPage.formControls.password.sendKeys(password);
        });
    }
    static insertUsername(username) {
        return __awaiter(this, void 0, void 0, function* () {
            yield login_po_1.LoginPage.formControls.username.sendKeys(username);
        });
    }
    static insertPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield login_po_1.LoginPage.formControls.password.sendKeys(password);
        });
    }
    static clickLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            yield login_po_1.LoginPage.formControls.loginButton.click();
        });
    }
    static logout() {
        return __awaiter(this, void 0, void 0, function* () {
            yield element_helper_1.ElementHelper.clickUsingJs(common_po_1.CommonPage.userProfile);
            yield element_helper_1.ElementHelper.clickUsingJs(common_po_1.CommonPage.logout);
        });
    }
    goTo() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(this.url());
        });
    }
    static verifyNavigation() {
        return __awaiter(this, void 0, void 0, function* () {
            yield expectation_helper_1.ExpectationHelper.verifyPageNavigation(login_po_1.LoginPage.mainContainer, login_page_constant_1.LoginPageConstant.pageName);
        });
    }
    url() {
        return '/arkcase';
    }
}
exports.LoginPageHelper = LoginPageHelper;
//# sourceMappingURL=login-page.helper.js.map