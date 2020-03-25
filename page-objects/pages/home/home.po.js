"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const home_page_constant_1 = require("./home-page.constant");
class HomePage {
    static get mainContainer() {
        return protractor_1.element(protractor_1.By.css(home_page_constant_1.HomePageConstant.className));
    }
    static get folders() {
        return {
            foldersLabelsLink: protractor_1.element(protractor_1.By.id('tour-label-settings')),
        };
    }
    static get base() {
        return {
            closeModal: protractor_1.element(protractor_1.By.css('button[title="Close"]')),
            inbox: protractor_1.element(protractor_1.By.css('li span a[href="/inbox"][target="_self"]'))
        };
    }
    static returnFolder(folder) {
        return protractor_1.element(protractor_1.By.css(`a[data-label='${folder}']`));
    }
    static returnLabel(label) {
        return protractor_1.element(protractor_1.By.css(`span[title='${label}']`));
    }
}
exports.HomePage = HomePage;
//# sourceMappingURL=home.po.js.map