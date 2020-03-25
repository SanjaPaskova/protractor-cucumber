import { element, By } from 'protractor';

import { LoginPageConstant } from './login-page.constant';

export class LoginPage {
    static get mainContainer() {
        return element(By.css(LoginPageConstant.className));
    }

    static get formControls() {
        const names = LoginPageConstant.formControlNames;
        return {
            username: element(By.id(names.username)),
            password: element(By.id(names.password)),
            loginButton: element(By.id(names.login)),
        };
    }
}
