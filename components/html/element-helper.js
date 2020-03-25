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
const wait_helper_1 = require("./wait-helper");
class ElementHelper {
    static click(targetElement) {
        return __awaiter(this, void 0, void 0, function* () {
            yield wait_helper_1.WaitHelper.waitForElementToBeClickable(targetElement);
            return targetElement.click();
        });
    }
    static clickIfPresent(targetElement) {
        return __awaiter(this, void 0, void 0, function* () {
            const isPresent = yield targetElement.isPresent();
            if (isPresent) {
                return this.click(targetElement);
            }
            return;
        });
    }
    static clickUsingJs(targetElement) {
        return __awaiter(this, void 0, void 0, function* () {
            yield wait_helper_1.WaitHelper.waitForElementToBeClickable(targetElement);
            return this.clickUsingJsNoWait(targetElement);
        });
    }
    static clickUsingJsNoWait(targetElement) {
        return __awaiter(this, void 0, void 0, function* () {
            return protractor_1.browser.executeScript('arguments[0].click();', yield targetElement.getWebElement());
        });
    }
    static getText(elem) {
        return __awaiter(this, void 0, void 0, function* () {
            yield wait_helper_1.WaitHelper.waitForElementToHaveText(elem);
            const text = yield elem.getText();
            return text.trim();
        });
    }
}
exports.ElementHelper = ElementHelper;
ElementHelper.EC = protractor_1.protractor.ExpectedConditions;
//# sourceMappingURL=element-helper.js.map