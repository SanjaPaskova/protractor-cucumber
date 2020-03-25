import { browser, protractor, ElementArrayFinder, ElementFinder, WebElement } from 'protractor';

import { ElementHelper } from './element-helper';
import { WaitHelper } from './wait-helper';

const shortId = require('shortid');
const remote = require('selenium-webdriver/remote');

export class PageHelper {
    static MAX_RETRY_ATTEMPTS = 3;
    static timeout = {
        xxs: 1000,
        xs: 2000,
        s: 5000,
        m: 10000,
        l: 25000,
        xl: 50000,
        xxl: 75000,
        xxxl: 200000,
        xxxxl: 500000,
    };
    static DEFAULT_TIMEOUT = PageHelper.timeout.xxl;
    private static readonly EC = protractor.ExpectedConditions;

  

    static async click(targetElement: ElementFinder) {

        await WaitHelper.waitForElementToBeClickable(targetElement);
        return targetElement.click();
    }

    public static async clickIfDisplayed(targetElement: ElementFinder, withoutJs = true) {
        const isPresent = await targetElement.isPresent();
        if (isPresent === true) {
            const isDisplayed = await targetElement.isDisplayed();
            if (isDisplayed === true) {
                if (withoutJs) {
                    await PageHelper.click(targetElement);
                } else {
                    await ElementHelper.clickUsingJs(targetElement);
                }
            }
        }
    }

    static async currentUrl() {
        return browser.getCurrentUrl();
    }

    public static async getPageTitle() {
        return await browser.getTitle();
    }

    public static async refreshPage() {
        await browser.refresh();
    }

    static async isElementHidden(targetElement: ElementFinder, toWait = true) {
        if (toWait) {
            return browser.wait(async () =>
                !(await targetElement.isPresent()) || !(await targetElement.isDisplayed()),
            ).then(() => true).catch(() => false);
        }
        return !(await targetElement.isPresent()) || !(await targetElement.isDisplayed());
    }

    static async isElementDisplayed(targetElement: ElementFinder, toWait = true, timeout = PageHelper.DEFAULT_TIMEOUT) {
        let caughtException = false;
        if (toWait) {
            await WaitHelper.waitForElementToBeDisplayed(targetElement, timeout)
                .catch(() => caughtException = true);
        }
        return !caughtException && await targetElement.isDisplayed();
    }

    static async isElementPresent(targetElement: ElementFinder, toWait = true, timeout = PageHelper.DEFAULT_TIMEOUT) {
        let caughtException = false;
        if (toWait) {
            await WaitHelper.waitForElementToBePresent(targetElement, timeout)
                .catch(() => caughtException = true);
        }
        return !caughtException && await targetElement.isPresent();
    }

    static async switchToDefaultContent() {
        await browser.switchTo().defaultContent();
        await browser.waitForAngularEnabled(true);
    }

    static getUniqueIntId(size = 6): string {
        // noinspection reason: Giving error for unknown character function
        // noinspection Annotator
        return Math.floor(Math.pow(10, size - 1) + Math.random() * 9 * Math.pow(10, size - 1)).toString();
    }

}
