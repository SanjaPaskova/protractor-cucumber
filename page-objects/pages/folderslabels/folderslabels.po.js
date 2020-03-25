"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const folderslabels_page_constant_1 = require("./folderslabels-page.constant");
class FoldersLabelsPage {
    static get mainContainer() {
        return protractor_1.element(protractor_1.By.css(folderslabels_page_constant_1.FoldersLabelsPageConstant.className));
    }
    static get folderslabels() {
        return {
            learnMoreLink: protractor_1.element(protractor_1.By.linkText('Learn more')),
            addFolderButton: protractor_1.element(protractor_1.By.css('button[data-test-id="folders/labels:addFolder"]')),
            addLabelButton: protractor_1.element(protractor_1.By.css('button[data-test-id="folders/labels:addLabel"]')),
            name: protractor_1.element(protractor_1.By.id('accountName')),
            submitButton: protractor_1.element(protractor_1.By.css('button[type="submit"]')),
            cancelButton: protractor_1.element(protractor_1.By.css('button[type="reset"]')),
            editButton: protractor_1.element(protractor_1.By.css('button[data-test-id="folders/labels:item-edit"]')),
            arrowButton: protractor_1.element(protractor_1.By.css('span.mauto svg[role="img"]')),
            deleteButton: protractor_1.element(protractor_1.By.buttonText('Delete')),
            labelAsButton: protractor_1.element(protractor_1.By.css('button[pt-tooltip="Label as"]')),
            addNewLabel: protractor_1.element(protractor_1.By.css('#tour-label-dropdown > div > div > form > div > div.flex-item-noshrink > button')),
            saveLabelButton: protractor_1.element(protractor_1.By.buttonText('Save')),
            applyButton: protractor_1.element(protractor_1.By.buttonText('Apply')),
        };
    }
    static get base() {
        return {
            closeModal: protractor_1.element(protractor_1.By.css('button[title="Close"]')),
        };
    }
    static returnFolder(folder) {
        return protractor_1.element(protractor_1.By.css(`a[data-label='${folder}']`));
    }
    static returnFolderLabelGrid(name) {
        return protractor_1.element(protractor_1.By.cssContainingText('span[data-test-id="folders/labels:item-name"]', `${name}`));
    }
}
exports.FoldersLabelsPage = FoldersLabelsPage;
//# sourceMappingURL=folderslabels.po.js.map