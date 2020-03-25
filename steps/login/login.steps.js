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
const login_page_helper_1 = require("../../page-objects/pages/login/login-page.helper");
var { browser } = require('protractor');
var { Given, When, Then } = require('cucumber');
Given("I navigate to web page {string}", { timeout: 10000 }, function (url) {
    browser.ignoreSynchronization = true;
    browser.get(url);
});
When("I enter {string} for field username", { timeout: 10000 }, (text) => __awaiter(void 0, void 0, void 0, function* () {
    yield login_page_helper_1.LoginPageHelper.insertUsername(text);
}));
When("I enter {string} for field password", { timeout: 10000 }, (text) => __awaiter(void 0, void 0, void 0, function* () {
    yield login_page_helper_1.LoginPageHelper.insertPassword(text);
}));
When("I click log in button", { timeout: 20000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield login_page_helper_1.LoginPageHelper.clickLogin();
}));
//# sourceMappingURL=login.steps.js.map