
import { BasePageHelper } from '../base-page.helper';
import { CommonPage } from '../common/common.po';

import { LoginPage } from './login.po';
import { ExpectationHelper } from '../../../components/misc-utils/expectation-helper';
import { LoginPageConstant } from './login-page.constant';
import { ElementHelper } from '../../../components/html/element-helper';
export class LoginPageHelper extends BasePageHelper {

    static async login(username: string, password: string) {
        
        await LoginPage.formControls.username.sendKeys(username);
        await LoginPage.formControls.password.sendKeys(password);
    }

    static async insertUsername(username: string) {
        await  LoginPage.formControls.username.sendKeys(username);
    }

    static async insertPassword(password: string) {
        await  LoginPage.formControls.password.sendKeys(password);
    }

    static async clickLogin() {
        await LoginPage.formControls.loginButton.click();
    }

    static async logout() {
        await ElementHelper.clickUsingJs(CommonPage.userProfile);
        await ElementHelper.clickUsingJs(CommonPage.logout);
    }

    async goTo() {
        return this.get(this.url());
    }

    static async verifyNavigation() {
        await ExpectationHelper.verifyPageNavigation(LoginPage.mainContainer, LoginPageConstant.pageName);
    }

    url(): string {
        return '/arkcase';
    }
}
