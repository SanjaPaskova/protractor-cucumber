import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';


import { FoldersLabelsPageConstant } from './folderslabels-page.constant';
import { FoldersLabelsPage } from './folderslabels.po';

import { BasePageHelper } from '../../pages/base-page.helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { ElementHelper } from '../../../components/html/element-helper';
import { ElementFinder } from 'protractor';
import { TextBoxHelper } from '../../../components/html/textbox-helper';


export class FolderslabelsHelper extends BasePageHelper {

    static async verifyNavigation() {
        await ExpectationHelper.verifyPageNavigation(FoldersLabelsPage.mainContainer, FoldersLabelsPageConstant.pageName);
        await ElementHelper.clickIfPresent(FoldersLabelsPage.base.closeModal);
    }

    static async addsFolderOrLabel(button: ElementFinder, name: string, submitButton: ElementFinder) {
        await WaitHelper.waitForElementToBeClickable(button);
        await ElementHelper.click(button);
        await WaitHelper.waitForElementToBeDisplayed(FoldersLabelsPage.folderslabels.name);
        await WaitHelper.waitForElementToBeClickable(FoldersLabelsPage.folderslabels.name);
        await TextBoxHelper.sendKeys(FoldersLabelsPage.folderslabels.name, name);
        await ElementHelper.click(submitButton);
    }

    static async editFoldeOrLabel(name: string) {
        await WaitHelper.waitForElementToBeDisplayed(FoldersLabelsPage.folderslabels.editButton);
        await ElementHelper.click(FoldersLabelsPage.folderslabels.editButton);
        await TextBoxHelper.clearText(FoldersLabelsPage.folderslabels.name);
        await TextBoxHelper.sendKeys(FoldersLabelsPage.folderslabels.name, name);
        await ElementHelper.click(FoldersLabelsPage.folderslabels.submitButton);
    }

    async goTo() {
        return this.get(this.url());
    }

    url(): string {
        return '/settings/labels';
    }
}
