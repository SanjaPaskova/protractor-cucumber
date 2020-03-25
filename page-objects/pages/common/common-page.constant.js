"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class CommonPageConstant {
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
exports.CommonPageConstant = CommonPageConstant;
CommonPageConstant.user = protractor_1.browser.params.users.user;
CommonPageConstant.urls = protractor_1.browser.params.url;
CommonPageConstant.credentials = {
    user: {
        username: CommonPageConstant.user.username.toString(),
        password: CommonPageConstant.user.password.toString(),
        displayName: CommonPageConstant.user.displayName.toString()
    },
};
CommonPageConstant.url = CommonPageConstant.urls;
//# sourceMappingURL=common-page.constant.js.map