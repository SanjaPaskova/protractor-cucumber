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
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const login_page_helper_1 = require("../page-objects/pages/login/login-page.helper");
const home_page_helper_1 = require("../page-objects/pages/home/home-page.helper");
const common_page_constant_1 = require("../page-objects/pages/common/common-page.constant");
const page_helper_1 = require("../components/html/page-helper");
let username = common_page_constant_1.CommonPageConstant.credentials.user.username;
let password = common_page_constant_1.CommonPageConstant.credentials.user.password;
cucumber_1.BeforeAll({ timeout: 100000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.ignoreSynchronization = true;
    yield protractor_1.browser.get(common_page_constant_1.CommonPageConstant.url);
    yield login_page_helper_1.LoginPageHelper.insertUsername(username);
    yield login_page_helper_1.LoginPageHelper.insertPassword(password);
    yield login_page_helper_1.LoginPageHelper.clickLogin();
    yield home_page_helper_1.HomePageHelper.verifyNavigation();
}));
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenShot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenShot, "image/png");
            yield page_helper_1.PageHelper.switchToDefaultContent();
        }
    });
});
cucumber_1.AfterAll({ timeout: 100000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.ignoreSynchronization = true;
    yield login_page_helper_1.LoginPageHelper.logout();
    yield protractor_1.browser.quit();
}));
//# sourceMappingURL=hooks.js.map