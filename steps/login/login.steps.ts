import { LoginPageHelper } from "../../page-objects/pages/login/login-page.helper";
var {browser} = require('protractor');
var {Given, When, Then} = require('cucumber');
Given("I navigate to web page {string}", {timeout: 10000}, function (url){
    browser.ignoreSynchronization = true;
    browser.get(url);
})

When("I enter {string} for field username",{timeout: 10000}, async (text) => {
    await LoginPageHelper.insertUsername(text);
})

When("I enter {string} for field password", {timeout: 10000}, async (text) => {
    await LoginPageHelper.insertPassword(text);
})

When("I click log in button", {timeout: 20000}, async () => {
    await LoginPageHelper.clickLogin();
})
