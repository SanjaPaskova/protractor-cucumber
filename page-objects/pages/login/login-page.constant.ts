export class LoginPageConstant {
    static readonly pageName = 'Login';
    static readonly className = '.login-wrapper';

    static get formControlNames() {
        return {
            username: 'username',
            password: 'password',
            login: 'login_btn'
        };
    }
}
