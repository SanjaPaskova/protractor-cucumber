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
const verbose_logger_1 = require("../../logger/verbose-logger");
class TextBoxHelper {
    static clearText(locator) {
        return __awaiter(this, void 0, void 0, function* () {
            let ctrl = protractor_1.protractor.Key.CONTROL;
            if (protractor_1.browser.platform && protractor_1.browser.platform.indexOf('Mac')) {
                ctrl = protractor_1.protractor.Key.COMMAND;
            }
            const command = protractor_1.protractor.Key.chord(ctrl, 'a') + protractor_1.protractor.Key.BACK_SPACE;
            yield locator.sendKeys(command);
            yield locator.clear();
        });
    }
    static sendKeys(locator, value, sendEnter = false) {
        return __awaiter(this, void 0, void 0, function* () {
            yield wait_helper_1.WaitHelper.waitForElementToBeDisplayed(locator);
            yield this.clearText(locator);
            // On IE, text is sometimes not well sent, this is a workaround
            verbose_logger_1.VerboseLogger.log(`Sending keys: ${value} to ${locator.locator().toString()}`);
            yield locator.sendKeys(value);
            if (sendEnter) {
                yield locator.sendKeys(protractor_1.protractor.Key.ENTER);
            }
        });
    }
}
exports.TextBoxHelper = TextBoxHelper;
//# sourceMappingURL=textbox-helper.js.map