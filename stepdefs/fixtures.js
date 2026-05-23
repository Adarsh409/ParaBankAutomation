const { test: base } = require('playwright-bdd');
const { RegistrationPage } = require('../pages/registrationPage');
const { AccountPage } = require('../pages/accountPage');
const { HomePage } = require('../pages/homePage');


const test = base.extend({

  sharedState: async ({}, use) => {
    await use({
      registeredUsername: '',
      registeredPassword: ''
    });
  },
  registrationPage: async ({ page }, use) => {
    const registrationPage = new RegistrationPage(page);
    await use(registrationPage);
  },

  accountPage : async ({page},use) =>
  {
    const accountPage = new AccountPage(page)
    await use(accountPage)
  },

  homePage : async ({page},use) => {
    const homePage = new HomePage(page)
    await use(homePage)
  }
});

module.exports = { test };