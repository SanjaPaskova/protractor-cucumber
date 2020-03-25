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
const element_helper_1 = require("./element-helper");
const wait_helper_1 = require("./wait-helper");
const shortId = require('shortid');
const remote = require('selenium-webdriver/remote');
class PageHelper {
    static click(targetElement) {
        return __awaiter(this, void 0, void 0, function* () {
            yield wait_helper_1.WaitHelper.waitForElementToBeClickable(targetElement);
            return targetElement.click();
        });
    }
    static clickIfDisplayed(targetElement, withoutJs = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const isPresent = yield targetElement.isPresent();
            if (isPresent === true) {
                const isDisplayed = yield targetElement.isDisplayed();
                if (isDisplayed === true) {
                    if (withoutJs) {
                        yield PageHelper.click(targetElement);
                    }
                    else {
                        yield element_helper_1.ElementHelper.clickUsingJs(targetElement);
                    }
                }
            }
        });
    }
    static currentUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.getCurrentUrl();
        });
    }
    static getPageTitle() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getTitle();
        });
    }
    static refreshPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.refresh();
        });
    }
    static isElementHidden(targetElement, toWait = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (toWait) {
                return protractor_1.browser.wait(() => __awaiter(this, void 0, void 0, function* () { return !(yield targetElement.isPresent()) || !(yield targetElement.isDisplayed()); })).then(() => true).catch(() => false);
            }
            return !(yield targetElement.isPresent()) || !(yield targetElement.isDisplayed());
        });
    }
    static isElementDisplayed(targetElement, toWait = true, timeout = PageHelper.DEFAULT_TIMEOUT) {
        return __awaiter(this, void 0, void 0, function* () {
            let caughtException = false;
            if (toWait) {
                yield wait_helper_1.WaitHelper.waitForElementToBeDisplayed(targetElement, timeout)
                    .catch(() => caughtException = true);
            }
            return !caughtException && (yield targetElement.isDisplayed());
        });
    }
    static isElementPresent(targetElement, toWait = true, timeout = PageHelper.DEFAULT_TIMEOUT) {
        return __awaiter(this, void 0, void 0, function* () {
            let caughtException = false;
            if (toWait) {
                yield wait_helper_1.WaitHelper.waitForElementToBePresent(targetElement, timeout)
                    .catch(() => caughtException = true);
            }
            return !caughtException && (yield targetElement.isPresent());
        });
    }
    static switchToDefaultContent() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().defaultContent();
            yield protractor_1.browser.waitForAngularEnabled(true);
        });
    }
    static getUniqueIntId(size = 6) {
        // noinspection reason: Giving error for unknown character function
        // noinspection Annotator
        return Math.floor(Math.pow(10, size - 1) + Math.random() * 9 * Math.pow(10, size - 1)).toString();
    }
}
exports.PageHelper = PageHelper;
PageHelper.MAX_RETRY_ATTEMPTS = 3;
PageHelper.timeout = {
    xxs: 1000,
    xs: 2000,
    s: 5000,
    m: 10000,
    l: 25000,
    xl: 50000,
    xxl: 75000,
    xxxl: 200000,
    xxxxl: 500000,
};
PageHelper.DEFAULT_TIMEOUT = PageHelper.timeout.xxl;
PageHelper.EC = protractor_1.protractor.ExpectedConditions;
//# sourceMappingURL=page-helper.js.map