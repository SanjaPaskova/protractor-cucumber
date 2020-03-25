import { browser } from 'protractor';

export abstract class BasePageHelper{
    abstract url(): string;

    async goTo() {
        return this.get(this.url());
    }

    async get(url: string) {
        await browser.waitForAngularEnabled(false);
        return browser.get(url, 75000);
    }
}
