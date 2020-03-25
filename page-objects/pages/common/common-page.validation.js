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
class CommonPageValidation {
    static mainContainerWidthShouldBeIncreased() {
        return __awaiter(this, void 0, void 0, function* () {
            return `Main container width should be increased at ${yield protractor_1.browser.getCurrentUrl()}`;
        });
    }
}
exports.CommonPageValidation = CommonPageValidation;
//# sourceMappingURL=common-page.validation.js.map