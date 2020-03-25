import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { BasePageHelper } from '../base-page.helper';

import { HomePageConstant } from './home-page.constant';
import { HomePage } from './home.po';
import { WaitHelper } from '../../../components/html/wait-helper';
import { ElementHelper } from '../../../components/html/element-helper';

export class HomePageHelper extends BasePageHelper {

    static async verifyNavigation() {
        await ExpectationHelper.verifyPageNavigation(HomePage.mainContainer, HomePageConstant.pageName);
        await ElementHelper.clickIfPresent(HomePage.base.closeModal);
    }

    static async clickFoldersLabels() {
        await WaitHelper.waitForElementToBeDisplayed(HomePage.returnFolder(HomePageConstant.Folders.inbox));
        await ElementHelper.click(HomePage.folders.foldersLabelsLink);
    }

    async goTo() {
        return this.get(this.url());
    }

    url(): string {
        return '/inbox';
    }
}
