import { browser, ElementFinder } from 'protractor';
import { ElementHelper } from '../html/element-helper';
import { PageHelper } from '../html/page-helper';

import { ValidationsHelper } from './validation-helper';
import { expect } from 'chai';
import { StepLogger } from '../../logger/step-logger';

export class ExpectationHelper {
    static async verifyPageNavigation(targetElement: ElementFinder, elementName: string) {
        StepLogger.verification(`Page - ${elementName} should display`);
        await expect(await PageHelper.isElementDisplayed(targetElement))
            .to.equal(true,
                ValidationsHelper.getPageDisplayedValidation(elementName));
    }

    static async verifyElementPresentStatus(targetElement: ElementFinder, elementName: string) {
        StepLogger.verification(`${elementName} should present`);
        await expect(await PageHelper.isElementPresent(targetElement))
            .to.equal(true,
                ValidationsHelper.getDisplayedValidation(elementName));
    }

    static async verifyRemovedStatus(targetElement: ElementFinder, elementName: string) {
        StepLogger.verification(`${elementName} should be removed`);
        await expect(await PageHelper.isElementHidden(targetElement))
            .to.equal(true,
                ValidationsHelper.getDisplayedValidation(elementName));
    }

}
