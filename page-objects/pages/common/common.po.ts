import { element, By } from 'protractor';

export class CommonPage {

    static get userProfile() {
        return element(By.css('div.flex.flex-nowrap.no-scroll > div > header > div > ul > li.mtauto.mbauto.relative > div > button'));
    }

    static get logout() {
        return element(By.css('button[data-cy-header-user-dropdown="logout"]'));
    }
}
