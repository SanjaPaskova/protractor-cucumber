import { ElementHelper } from "../../components/html/element-helper";
import { ExpectationHelper } from "../../components/misc-utils/expectation-helper";
import { WaitHelper } from "../../components/html/wait-helper";
import { HomePageConstant } from "../../page-objects/pages/home/home-page.constant";
import { FoldersLabelsPage } from "../../page-objects/pages/folderslabels/folderslabels.po";
import { PageHelper } from "../../components/html/page-helper";
import { FolderslabelsHelper } from "../../page-objects/pages/folderslabels/folderslabels-page.helper";
import { FoldersLabelsPageConstant } from "../../page-objects/pages/folderslabels/folderslabels-page.constant";
var {When, Then} = require('cucumber');
let uniqueId = PageHelper.getUniqueIntId(5);
let folderInfo = FoldersLabelsPageConstant.FoldersData;
let folder = `${folderInfo.folder}-${uniqueId}`;
let editFolder =  `${folderInfo.editfolder}-${uniqueId}`;
let labelInfo = FoldersLabelsPageConstant.LabelData;
let label = `${labelInfo.label}-${uniqueId}`;
let editLabel = `${labelInfo.editlabel}-${uniqueId}`;
Then("Validate that add folder button is displayed", {timeout: 10000}, async () => {
    await ExpectationHelper.verifyElementPresentStatus(FoldersLabelsPage.folderslabels.addFolderButton, HomePageConstant.Folders.inbox);
})

When("User adds folder",{timeout: 10000}, async () => {
    await FolderslabelsHelper.addsFolderOrLabel(FoldersLabelsPage.folderslabels.addFolderButton, folder, FoldersLabelsPage.folderslabels.submitButton);
})

Then("Validate that folder is successfully created.", {timeout: 10000}, async () => {
    await ExpectationHelper.verifyElementPresentStatus(FoldersLabelsPage.returnFolderLabelGrid(folder), FoldersLabelsPageConstant.Messages.folder)
})

When("User adds label",{timeout: 10000}, async () => {
    await FolderslabelsHelper.addsFolderOrLabel(FoldersLabelsPage.folderslabels.addLabelButton, label, FoldersLabelsPage.folderslabels.submitButton);
})

When("User edit folder",{timeout: 10000}, async () => {
    await FolderslabelsHelper.editFoldeOrLabel(editFolder);
})

Then("Validate that folder name is successfully edited.", {timeout: 10000}, async () => {
    await ExpectationHelper.verifyElementPresentStatus(FoldersLabelsPage.returnFolderLabelGrid(editFolder), FoldersLabelsPageConstant.Messages.folder)
})

When("User delete folder",{timeout: 10000}, async () => {
    await WaitHelper.waitForElementToBeDisplayed(FoldersLabelsPage.folderslabels.arrowButton);
    await ElementHelper.click(FoldersLabelsPage.folderslabels.arrowButton);
    await WaitHelper.waitForElementToBeDisplayed(FoldersLabelsPage.folderslabels.deleteButton);
    await ElementHelper.click(FoldersLabelsPage.folderslabels.deleteButton);
    await WaitHelper.waitForElementToBeDisplayed(FoldersLabelsPage.folderslabels.submitButton);
    await ElementHelper.click(FoldersLabelsPage.folderslabels.submitButton);
})

Then("Validate that folder is successfully deleted", {timeout: 10000}, async () => {
    await WaitHelper.waitForElementToBeHidden(FoldersLabelsPage.returnFolderLabelGrid(editFolder));
    await ExpectationHelper.verifyRemovedStatus(FoldersLabelsPage.returnFolderLabelGrid(editFolder), FoldersLabelsPageConstant.Messages.folder)
})

Then("Validate that label is successfully created.", {timeout: 10000}, async () => {
    await ExpectationHelper.verifyElementPresentStatus(FoldersLabelsPage.returnFolderLabelGrid(label), FoldersLabelsPageConstant.Messages.folder)
})

When("User edit label",{timeout: 10000}, async () => {
    await FolderslabelsHelper.editFoldeOrLabel(editLabel);
})

Then("Validate that label is successfully edited.", {timeout: 10000}, async () => {
    await ExpectationHelper.verifyElementPresentStatus(FoldersLabelsPage.returnFolderLabelGrid(editLabel), FoldersLabelsPageConstant.Messages.folder)
})

Then("Validate that label is successfully deleted", {timeout: 10000}, async () => {
    await WaitHelper.waitForElementToBeHidden(FoldersLabelsPage.returnFolderLabelGrid(editLabel));
    await ExpectationHelper.verifyRemovedStatus(FoldersLabelsPage.returnFolderLabelGrid(editLabel), FoldersLabelsPageConstant.Messages.folder)
})

When("User adds folder and cancels",{timeout: 10000}, async () => {
    await FolderslabelsHelper.addsFolderOrLabel(FoldersLabelsPage.folderslabels.addFolderButton, folder, FoldersLabelsPage.folderslabels.cancelButton);
})

Then("Validate that folder is not successfully created", {timeout: 10000}, async () => {
    await ExpectationHelper.verifyRemovedStatus(FoldersLabelsPage.returnFolderLabelGrid(folder), FoldersLabelsPageConstant.Messages.folder)
})

When("User adds label and cancels",{timeout: 10000}, async () => {
    await FolderslabelsHelper.addsFolderOrLabel(FoldersLabelsPage.folderslabels.addLabelButton, label, FoldersLabelsPage.folderslabels.cancelButton);
})

Then("Validate that label is not successfully created", {timeout: 10000}, async () => {
    await ExpectationHelper.verifyRemovedStatus(FoldersLabelsPage.returnFolderLabelGrid(label), FoldersLabelsPageConstant.Messages.folder)
})