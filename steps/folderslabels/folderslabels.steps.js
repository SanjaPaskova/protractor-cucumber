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
const element_helper_1 = require("../../components/html/element-helper");
const expectation_helper_1 = require("../../components/misc-utils/expectation-helper");
const wait_helper_1 = require("../../components/html/wait-helper");
const home_page_constant_1 = require("../../page-objects/pages/home/home-page.constant");
const folderslabels_po_1 = require("../../page-objects/pages/folderslabels/folderslabels.po");
const page_helper_1 = require("../../components/html/page-helper");
const folderslabels_page_helper_1 = require("../../page-objects/pages/folderslabels/folderslabels-page.helper");
const folderslabels_page_constant_1 = require("../../page-objects/pages/folderslabels/folderslabels-page.constant");
var { When, Then } = require('cucumber');
let uniqueId = page_helper_1.PageHelper.getUniqueIntId(5);
let folderInfo = folderslabels_page_constant_1.FoldersLabelsPageConstant.FoldersData;
let folder = `${folderInfo.folder}-${uniqueId}`;
let editFolder = `${folderInfo.editfolder}-${uniqueId}`;
let labelInfo = folderslabels_page_constant_1.FoldersLabelsPageConstant.LabelData;
let label = `${labelInfo.label}-${uniqueId}`;
let editLabel = `${labelInfo.editlabel}-${uniqueId}`;
Then("Validate that add folder button is displayed", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield expectation_helper_1.ExpectationHelper.verifyElementPresentStatus(folderslabels_po_1.FoldersLabelsPage.folderslabels.addFolderButton, home_page_constant_1.HomePageConstant.Folders.inbox);
}));
When("User adds folder", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield folderslabels_page_helper_1.FolderslabelsHelper.addsFolderOrLabel(folderslabels_po_1.FoldersLabelsPage.folderslabels.addFolderButton, folder, folderslabels_po_1.FoldersLabelsPage.folderslabels.submitButton);
}));
Then("Validate that folder is successfully created.", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield expectation_helper_1.ExpectationHelper.verifyElementPresentStatus(folderslabels_po_1.FoldersLabelsPage.returnFolderLabelGrid(folder), folderslabels_page_constant_1.FoldersLabelsPageConstant.Messages.folder);
}));
When("User adds label", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield folderslabels_page_helper_1.FolderslabelsHelper.addsFolderOrLabel(folderslabels_po_1.FoldersLabelsPage.folderslabels.addLabelButton, label, folderslabels_po_1.FoldersLabelsPage.folderslabels.submitButton);
}));
When("User edit folder", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield folderslabels_page_helper_1.FolderslabelsHelper.editFoldeOrLabel(editFolder);
}));
Then("Validate that folder name is successfully edited.", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield expectation_helper_1.ExpectationHelper.verifyElementPresentStatus(folderslabels_po_1.FoldersLabelsPage.returnFolderLabelGrid(editFolder), folderslabels_page_constant_1.FoldersLabelsPageConstant.Messages.folder);
}));
When("User delete folder", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield wait_helper_1.WaitHelper.waitForElementToBeDisplayed(folderslabels_po_1.FoldersLabelsPage.folderslabels.arrowButton);
    yield element_helper_1.ElementHelper.click(folderslabels_po_1.FoldersLabelsPage.folderslabels.arrowButton);
    yield wait_helper_1.WaitHelper.waitForElementToBeDisplayed(folderslabels_po_1.FoldersLabelsPage.folderslabels.deleteButton);
    yield element_helper_1.ElementHelper.click(folderslabels_po_1.FoldersLabelsPage.folderslabels.deleteButton);
    yield wait_helper_1.WaitHelper.waitForElementToBeDisplayed(folderslabels_po_1.FoldersLabelsPage.folderslabels.submitButton);
    yield element_helper_1.ElementHelper.click(folderslabels_po_1.FoldersLabelsPage.folderslabels.submitButton);
}));
Then("Validate that folder is successfully deleted", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield wait_helper_1.WaitHelper.waitForElementToBeHidden(folderslabels_po_1.FoldersLabelsPage.returnFolderLabelGrid(editFolder));
    yield expectation_helper_1.ExpectationHelper.verifyRemovedStatus(folderslabels_po_1.FoldersLabelsPage.returnFolderLabelGrid(editFolder), folderslabels_page_constant_1.FoldersLabelsPageConstant.Messages.folder);
}));
Then("Validate that label is successfully created.", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield expectation_helper_1.ExpectationHelper.verifyElementPresentStatus(folderslabels_po_1.FoldersLabelsPage.returnFolderLabelGrid(label), folderslabels_page_constant_1.FoldersLabelsPageConstant.Messages.folder);
}));
When("User edit label", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield folderslabels_page_helper_1.FolderslabelsHelper.editFoldeOrLabel(editLabel);
}));
Then("Validate that label is successfully edited.", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield expectation_helper_1.ExpectationHelper.verifyElementPresentStatus(folderslabels_po_1.FoldersLabelsPage.returnFolderLabelGrid(editLabel), folderslabels_page_constant_1.FoldersLabelsPageConstant.Messages.folder);
}));
Then("Validate that label is successfully deleted", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield wait_helper_1.WaitHelper.waitForElementToBeHidden(folderslabels_po_1.FoldersLabelsPage.returnFolderLabelGrid(editLabel));
    yield expectation_helper_1.ExpectationHelper.verifyRemovedStatus(folderslabels_po_1.FoldersLabelsPage.returnFolderLabelGrid(editLabel), folderslabels_page_constant_1.FoldersLabelsPageConstant.Messages.folder);
}));
When("User adds folder and cancels", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield folderslabels_page_helper_1.FolderslabelsHelper.addsFolderOrLabel(folderslabels_po_1.FoldersLabelsPage.folderslabels.addFolderButton, folder, folderslabels_po_1.FoldersLabelsPage.folderslabels.cancelButton);
}));
Then("Validate that folder is not successfully created", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield expectation_helper_1.ExpectationHelper.verifyRemovedStatus(folderslabels_po_1.FoldersLabelsPage.returnFolderLabelGrid(folder), folderslabels_page_constant_1.FoldersLabelsPageConstant.Messages.folder);
}));
When("User adds label and cancels", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield folderslabels_page_helper_1.FolderslabelsHelper.addsFolderOrLabel(folderslabels_po_1.FoldersLabelsPage.folderslabels.addLabelButton, label, folderslabels_po_1.FoldersLabelsPage.folderslabels.cancelButton);
}));
Then("Validate that label is not successfully created", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield expectation_helper_1.ExpectationHelper.verifyRemovedStatus(folderslabels_po_1.FoldersLabelsPage.returnFolderLabelGrid(label), folderslabels_page_constant_1.FoldersLabelsPageConstant.Messages.folder);
}));
//# sourceMappingURL=folderslabels.steps.js.map