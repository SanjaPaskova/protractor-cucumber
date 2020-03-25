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
const expectation_helper_1 = require("../../components/misc-utils/expectation-helper");
const wait_helper_1 = require("../../components/html/wait-helper");
const home_po_1 = require("../../page-objects/pages/home/home.po");
const home_page_constant_1 = require("../../page-objects/pages/home/home-page.constant");
const home_page_helper_1 = require("../../page-objects/pages/home/home-page.helper");
const folderslabels_po_1 = require("../../page-objects/pages/folderslabels/folderslabels.po");
var { Given, When, Then } = require('cucumber');
Given("User successfully logins", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield wait_helper_1.WaitHelper.waitForElementToBeDisplayed(home_po_1.HomePage.folders.foldersLabelsLink);
    yield expectation_helper_1.ExpectationHelper.verifyElementPresentStatus(home_po_1.HomePage.folders.foldersLabelsLink, home_page_constant_1.HomePageConstant.Messages.foldersLabels);
}));
Then("Validate that user have all default folders", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield expectation_helper_1.ExpectationHelper.verifyElementPresentStatus(home_po_1.HomePage.returnFolder(home_page_constant_1.HomePageConstant.Folders.inbox), home_page_constant_1.HomePageConstant.Folders.inbox);
    yield expectation_helper_1.ExpectationHelper.verifyElementPresentStatus(home_po_1.HomePage.returnFolder(home_page_constant_1.HomePageConstant.Folders.drafts), home_page_constant_1.HomePageConstant.Folders.drafts);
    yield expectation_helper_1.ExpectationHelper.verifyElementPresentStatus(home_po_1.HomePage.returnFolder(home_page_constant_1.HomePageConstant.Folders.sent), home_page_constant_1.HomePageConstant.Folders.sent);
    yield expectation_helper_1.ExpectationHelper.verifyElementPresentStatus(home_po_1.HomePage.returnFolder(home_page_constant_1.HomePageConstant.Folders.starred), home_page_constant_1.HomePageConstant.Folders.starred);
    yield expectation_helper_1.ExpectationHelper.verifyElementPresentStatus(home_po_1.HomePage.returnFolder(home_page_constant_1.HomePageConstant.Folders.archive), home_page_constant_1.HomePageConstant.Folders.archive);
    yield expectation_helper_1.ExpectationHelper.verifyElementPresentStatus(home_po_1.HomePage.returnFolder(home_page_constant_1.HomePageConstant.Folders.spam), home_page_constant_1.HomePageConstant.Folders.spam);
    yield expectation_helper_1.ExpectationHelper.verifyElementPresentStatus(home_po_1.HomePage.returnFolder(home_page_constant_1.HomePageConstant.Folders.trash), home_page_constant_1.HomePageConstant.Folders.trash);
    yield expectation_helper_1.ExpectationHelper.verifyElementPresentStatus(home_po_1.HomePage.returnFolder(home_page_constant_1.HomePageConstant.Folders.allMail), home_page_constant_1.HomePageConstant.Folders.allMail);
}));
When("User click on Folders and Labels", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield wait_helper_1.WaitHelper.waitForElementToBeDisplayed(home_po_1.HomePage.folders.foldersLabelsLink);
    yield home_page_helper_1.HomePageHelper.clickFoldersLabels();
}));
Then("Validate that Learn more link is displayed", { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield expectation_helper_1.ExpectationHelper.verifyElementPresentStatus(folderslabels_po_1.FoldersLabelsPage.folderslabels.learnMoreLink, home_page_constant_1.HomePageConstant.Folders.inbox);
}));
//# sourceMappingURL=home.steps.js.map