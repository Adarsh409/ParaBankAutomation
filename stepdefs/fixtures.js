import {test as base} from 'playwright-bdd'

import { RegistrationPage } from '../pages/registrationPage'
import { AccountPage } from '../pages/accountPage'
import { HomePage } from '../pages/homePage'


exports.test = base.extend({
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