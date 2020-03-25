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
const page_helper_1 = require("../html/page-helper");
const validation_helper_1 = require("./validation-helper");
const chai_1 = require("chai");
const step_logger_1 = require("../../logger/step-logger");
class ExpectationHelper {
    static verifyPageNavigation(targetElement, elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            step_logger_1.StepLogger.verification(`Page - ${elementName} should display`);
            yield chai_1.expect(yield page_helper_1.PageHelper.isElementDisplayed(targetElement))
                .to.equal(true, validation_helper_1.ValidationsHelper.getPageDisplayedValidation(elementName));
        });
    }
    static verifyElementPresentStatus(targetElement, elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            step_logger_1.StepLogger.verification(`${elementName} should present`);
            yield chai_1.expect(yield page_helper_1.PageHelper.isElementPresent(targetElement))
                .to.equal(true, validation_helper_1.ValidationsHelper.getDisplayedValidation(elementName));
        });
    }
    static verifyRemovedStatus(targetElement, elementName) {
        return __awaiter(this, void 0, void 0, function* () {
            step_logger_1.StepLogger.verification(`${elementName} should be removed`);
            yield chai_1.expect(yield page_helper_1.PageHelper.isElementHidden(targetElement))
                .to.equal(true, validation_helper_1.ValidationsHelper.getDisplayedValidation(elementName));
        });
    }
}
exports.ExpectationHelper = ExpectationHelper;
//# sourceMappingURL=expectation-helper.js.map