import { browser, ElementFinder } from 'protractor';
import { PageHelper } from '../../../components/html/page-helper';

import { CommonPage } from './common.po';
import { TextBoxHelper } from '../../../components/html/textbox-helper';
import { ElementHelper } from '../../../components/html/element-helper';
import { WaitHelper } from '../../../components/html/wait-helper';
import { StepLogger } from '../../../logger/step-logger';

export class CommonPageHelper {

    static async logout() {
        StepLogger.step('Select logout from the profile down arrow');
        await browser.sleep(PageHelper.timeout.xs);

        await PageHelper.click(CommonPage.userProfile);
        await PageHelper.click(CommonPage.logout)
    }
}
