"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class CommonPage {
    static get userProfile() {
        return protractor_1.element(protractor_1.By.css('div.flex.flex-nowrap.no-scroll > div > header > div > ul > li.mtauto.mbauto.relative > div > button'));
    }
    static get logout() {
        return protractor_1.element(protractor_1.By.css('button[data-cy-header-user-dropdown="logout"]'));
    }
}
exports.CommonPage = CommonPage;
//# sourceMappingURL=common.po.js.map