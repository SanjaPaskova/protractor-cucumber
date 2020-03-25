import { browser } from "protractor";

export class CommonPageConstant {
    static readonly user = browser.params.users.user;
       static readonly urls = browser.params.url;
    static credentials = {
        user: {
            username: CommonPageConstant.user.username.toString(),
            password: CommonPageConstant.user.password.toString(),
            displayName: CommonPageConstant.user.displayName.toString()
        },
    };
    static url =  CommonPageConstant.urls;

    static get profileOptions() {
        return {
            logOut: 'Logout',
            profile: 'Profile'
        };
    }

    static get commonButtonLabels() {
        return {
            save: 'Save',
            yes: 'Yes',
            no: 'No',
            cancel: 'Cancel'
        };
    }
}
