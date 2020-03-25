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
const expectation_helper_1 = require("../../../components/misc-utils/expectation-helper");
const folderslabels_page_constant_1 = require("./folderslabels-page.constant");
const folderslabels_po_1 = require("./folderslabels.po");
const base_page_helper_1 = require("../../pages/base-page.helper");
const wait_helper_1 = require("../../../components/html/wait-helper");
const element_helper_1 = require("../../../components/html/element-helper");
const textbox_helper_1 = require("../../../components/html/textbox-helper");
class FolderslabelsHelper extends base_page_helper_1.BasePageHelper {
    static verifyNavigation() {
        return __awaiter(this, void 0, void 0, function* () {
            yield expectation_helper_1.ExpectationHelper.verifyPageNavigation(folderslabels_po_1.FoldersLabelsPage.mainContainer, folderslabels_page_constant_1.FoldersLabelsPageConstant.pageName);
            yield element_helper_1.ElementHelper.clickIfPresent(folderslabels_po_1.FoldersLabelsPage.base.closeModal);
        });
    }
    static addsFolderOrLabel(button, name, submitButton) {
        return __awaiter(this, void 0, void 0, function* () {
            yield wait_helper_1.WaitHelper.waitForElementToBeClickable(button);
            yield element_helper_1.ElementHelper.click(button);
            yield wait_helper_1.WaitHelper.waitForElementToBeDisplayed(folderslabels_po_1.FoldersLabelsPage.folderslabels.name);
            yield wait_helper_1.WaitHelper.waitForElementToBeClickable(folderslabels_po_1.FoldersLabelsPage.folderslabels.name);
            yield textbox_helper_1.TextBoxHelper.sendKeys(folderslabels_po_1.FoldersLabelsPage.folderslabels.name, name);
            yield element_helper_1.ElementHelper.click(submitButton);
        });
    }
    static editFoldeOrLabel(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield wait_helper_1.WaitHelper.waitForElementToBeDisplayed(folderslabels_po_1.FoldersLabelsPage.folderslabels.editButton);
            yield element_helper_1.ElementHelper.click(folderslabels_po_1.FoldersLabelsPage.folderslabels.editButton);
            yield textbox_helper_1.TextBoxHelper.clearText(folderslabels_po_1.FoldersLabelsPage.folderslabels.name);
            yield textbox_helper_1.TextBoxHelper.sendKeys(folderslabels_po_1.FoldersLabelsPage.folderslabels.name, name);
            yield element_helper_1.ElementHelper.click(folderslabels_po_1.FoldersLabelsPage.folderslabels.submitButton);
        });
    }
    goTo() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.get(this.url());
        });
    }
    url() {
        return '/settings/labels';
    }
}
exports.FolderslabelsHelper = FolderslabelsHelper;
//# sourceMappingURL=folderslabels-page.helper.js.map