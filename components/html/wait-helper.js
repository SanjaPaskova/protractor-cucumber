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
const page_helper_1 = require("./page-helper");
const verbose_logger_1 = require("../../logger/verbose-logger");
class WaitHelper {
    static waitForElementToBeDisplayed(targetElement, timeout = page_helper_1.PageHelper.DEFAULT_TIMEOUT, message = 'Element should be visible') {
        return __awaiter(this, void 0, void 0, function* () {
            verbose_logger_1.VerboseLogger.logSelector(timeout, targetElement, 'be visible');
            return protractor_1.browser.wait(this.EC.visibilityOf(targetElement), timeout, targetElement.locator().toString() + message)
                .then(() => true, () => false);
        });
    }
    static waitForElementToBePresent(targetElement, timeout = page_helper_1.PageHelper.DEFAULT_TIMEOUT, message = 'Element should be visible') {
        return __awaiter(this, void 0, void 0, function* () {
            verbose_logger_1.VerboseLogger.logSelector(timeout, targetElement, 'be present');
            return protractor_1.browser.wait(this.EC.presenceOf(targetElement), timeout, targetElement.locator().toString() + message)
                .then(() => true, () => false);
        });
    }
    static waitForElementToBeHidden(targetElement, timeout = page_helper_1.PageHelper.DEFAULT_TIMEOUT, message = 'Element should not be visible') {
        return __awaiter(this, void 0, void 0, function* () {
            verbose_logger_1.VerboseLogger.logSelector(timeout, targetElement, 'be invisible');
            return protractor_1.browser.wait(this.EC.invisibilityOf(targetElement), timeout, targetElement.locator().toString() + message);
        });
    }
    static waitForElementToBeClickable(targetElement, timeout = page_helper_1.PageHelper.DEFAULT_TIMEOUT, message = 'Element not clickable') {
        return __awaiter(this, void 0, void 0, function* () {
            verbose_logger_1.VerboseLogger.logSelector(timeout, targetElement, 'be clickable');
            try {
                yield protractor_1.browser.wait(this.EC.elementToBeClickable(targetElement), timeout, targetElement.locator().toString() + message);
            }
            catch (e) {
            }
        });
    }
    static waitForElementToHaveText(targetElement, timeout = page_helper_1.PageHelper.DEFAULT_TIMEOUT, message = '') {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForElementToBePresent(targetElement);
            verbose_logger_1.VerboseLogger.logSelector(timeout, targetElement, 'have text');
            yield protractor_1.browser.wait(() => __awaiter(this, void 0, void 0, function* () { return (yield targetElement.getText()).trimLeft().trimRight() !== ''; }), timeout, message);
        });
    }
}
exports.WaitHelper = WaitHelper;
WaitHelper.EC = protractor_1.protractor.ExpectedConditions;
//# sourceMappingURL=wait-helper.js.map