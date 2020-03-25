import { browser, protractor, ElementFinder } from 'protractor';


import { WaitHelper } from './wait-helper';
import { VerboseLogger } from '../../logger/verbose-logger';

export class TextBoxHelper {

    static async clearText(locator: ElementFinder) {
        let ctrl = protractor.Key.CONTROL;

        if (browser.platform && browser.platform.indexOf('Mac')) {
            ctrl = protractor.Key.COMMAND;
        }
        const command = protractor.Key.chord(ctrl, 'a') + protractor.Key.BACK_SPACE;
        await locator.sendKeys(command);
        await locator.clear();
    }

    static async sendKeys(locator: ElementFinder,
                          value: string,
                          sendEnter = false) {
        await WaitHelper.waitForElementToBeDisplayed(locator);
        await this.clearText(locator);

        // On IE, text is sometimes not well sent, this is a workaround
        VerboseLogger.log(`Sending keys: ${value} to ${locator.locator().toString()}`);
        await locator.sendKeys(value);
        if (sendEnter) {
            await locator.sendKeys(protractor.Key.ENTER);
        }
    }
}

