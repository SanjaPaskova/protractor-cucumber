import { browser, by, element, protractor, By, ElementFinder } from 'protractor';

import { WaitHelper } from './wait-helper';

export class ElementHelper {
    private static readonly EC = protractor.ExpectedConditions;

    static async click(targetElement: ElementFinder) {
        await WaitHelper.waitForElementToBeClickable(targetElement);
        return targetElement.click();
    }

    static async clickIfPresent(targetElement: ElementFinder) {
        const isPresent = await targetElement.isPresent();
        if (isPresent) {
            return this.click(targetElement);
        }
        return;
    }

    static async clickUsingJs(targetElement: ElementFinder) {
        await WaitHelper.waitForElementToBeClickable(targetElement);
        return this.clickUsingJsNoWait(targetElement);
    }

    static async clickUsingJsNoWait(targetElement: ElementFinder) {
        return browser.executeScript('arguments[0].click();', await targetElement.getWebElement());
    }
    
    static async getText(elem: ElementFinder) {
        await WaitHelper.waitForElementToHaveText(elem);
        const text = await elem.getText();
        return text.trim();
    }

}
