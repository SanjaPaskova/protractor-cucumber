import { BeforeAll, After, AfterAll, Status } from "cucumber";
import { browser } from "protractor";
import { LoginPageHelper } from "../page-objects/pages/login/login-page.helper";
import { HomePageHelper } from "../page-objects/pages/home/home-page.helper";
import { CommonPageConstant } from "../page-objects/pages/common/common-page.constant";
import { PageHelper } from "../components/html/page-helper";
let username = CommonPageConstant.credentials.user.username;
let password = CommonPageConstant.credentials.user.password;
BeforeAll({timeout: 100000}, async () => {
    browser.ignoreSynchronization = true;
    await browser.get(CommonPageConstant.url);
    await LoginPageHelper.insertUsername(username);
    await LoginPageHelper.insertPassword(password);
    await LoginPageHelper.clickLogin();
    await HomePageHelper.verifyNavigation();
});

After(async function(scenario) {
    if (scenario.result.status === Status.FAILED) {
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
         await PageHelper.switchToDefaultContent();
    }
});

AfterAll({timeout: 100000}, async () => {
    browser.ignoreSynchronization = true;
    await LoginPageHelper.logout();
    await browser.quit();
});