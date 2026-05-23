const { createBdd } = require('playwright-bdd');
const { test } = require('./fixtures');

const { Given, When, Then } = createBdd(test);

Given('User launches the application', async({homePage}) =>{
  await homePage.loadApplication()
});

When('User clicks the Register link', async ({homePage})=> {
    await homePage.clickRegistrationLink();
});

When('User enters the following registration details:', async ({registrationPage,sharedState},dataTable) =>{
    const registrationData = dataTable.rowsHash();
    const credentials = await registrationPage.enterRegistrationDetails(registrationData)
    sharedState.registeredUsername = credentials.username;
    sharedState.registeredPassword = credentials.password;
});

When('User clicks Register button', async ({registrationPage}) => {
    await registrationPage.clickRegisterButton();
});

Then('Success message should be displayed', async ({registrationPage}) => {
  await registrationPage.verifyRegistrationSuccessMessage();
});

When('User logs out of the application', async ({registrationPage}) => {
    await registrationPage.clickLogoutLink();
});

When('User logs in with newly created credentials', async ({homePage,sharedState}) => {
  await homePage.login(sharedState.registeredUsername,sharedState.registeredPassword)
    
});

Then('Account details should be visible', async ({accountPage}) => {
    await accountPage.printAccountNumber();
    await accountPage.printBalanceAmount();
    await accountPage.printAvailableAmount();
});
