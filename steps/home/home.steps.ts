import { ExpectationHelper } from "../../components/misc-utils/expectation-helper";
import { WaitHelper } from "../../components/html/wait-helper";
import { HomePage } from "../../page-objects/pages/home/home.po";
import { HomePageConstant } from "../../page-objects/pages/home/home-page.constant";
import { HomePageHelper } from "../../page-objects/pages/home/home-page.helper";
import { FoldersLabelsPage } from "../../page-objects/pages/folderslabels/folderslabels.po";
var {Given, When, Then} = require('cucumber');

Given("User successfully logins",{timeout: 10000}, async () => {
    await WaitHelper.waitForElementToBeDisplayed(HomePage.folders.foldersLabelsLink);
    await ExpectationHelper.verifyElementPresentStatus(HomePage.folders.foldersLabelsLink, HomePageConstant.Messages.foldersLabels)
})

Then("Validate that user have all default folders", {timeout: 10000}, async () => {
    await ExpectationHelper.verifyElementPresentStatus(HomePage.returnFolder(HomePageConstant.Folders.inbox), HomePageConstant.Folders.inbox);
    await ExpectationHelper.verifyElementPresentStatus(HomePage.returnFolder(HomePageConstant.Folders.drafts), HomePageConstant.Folders.drafts);
    await ExpectationHelper.verifyElementPresentStatus(HomePage.returnFolder(HomePageConstant.Folders.sent), HomePageConstant.Folders.sent);
    await ExpectationHelper.verifyElementPresentStatus(HomePage.returnFolder(HomePageConstant.Folders.starred), HomePageConstant.Folders.starred);
    await ExpectationHelper.verifyElementPresentStatus(HomePage.returnFolder(HomePageConstant.Folders.archive), HomePageConstant.Folders.archive);
    await ExpectationHelper.verifyElementPresentStatus(HomePage.returnFolder(HomePageConstant.Folders.spam), HomePageConstant.Folders.spam);
    await ExpectationHelper.verifyElementPresentStatus(HomePage.returnFolder(HomePageConstant.Folders.trash), HomePageConstant.Folders.trash);
    await ExpectationHelper.verifyElementPresentStatus(HomePage.returnFolder(HomePageConstant.Folders.allMail), HomePageConstant.Folders.allMail);
})

When("User click on Folders and Labels",{timeout: 10000}, async () => {
    await WaitHelper.waitForElementToBeDisplayed(HomePage.folders.foldersLabelsLink);
    await HomePageHelper.clickFoldersLabels();
})

Then("Validate that Learn more link is displayed", {timeout: 10000}, async () => {
    await ExpectationHelper.verifyElementPresentStatus(FoldersLabelsPage.folderslabels.learnMoreLink, HomePageConstant.Folders.inbox);
})