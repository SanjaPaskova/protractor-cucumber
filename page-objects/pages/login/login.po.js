"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const login_page_constant_1 = require("./login-page.constant");
class LoginPage {
    static get mainContainer() {
        return protractor_1.element(protractor_1.By.css(login_page_constant_1.LoginPageConstant.className));
    }
    static get formControls() {
        const names = login_page_constant_1.LoginPageConstant.formControlNames;
        return {
            username: protractor_1.element(protractor_1.By.id(names.username)),
            password: protractor_1.element(protractor_1.By.id(names.password)),
            loginButton: protractor_1.element(protractor_1.By.id(names.login)),
        };
    }
}
exports.LoginPage = LoginPage;
//# sourceMappingURL=login.po.js.map