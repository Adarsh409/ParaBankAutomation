const { createBdd } = require('playwright-bdd');
const { test } = require('./fixtures');

const { Given, When, Then } = createBdd(test);

Given('User launches the application', async({homePage}) =>{
  await homePage.loadApplication()
});

When('User clicks the Register link', async ({homePage})=> {
    await homePage.clickRegistrationLink();
});

When('User enters the following registration details:', async ({registrationPage},dataTable) =>{
    const registrationData = dataTable.rowsHash();
    await registrationPage.enterRegistrationDetails(registrationData)
});

When('User clicks Register button', async ({registrationPage}) => {
    await registrationPage.clickRegisterButton();
});

Then('Sucess message should be displayed', async ({registrationPage}) => {
  await registrationPage.getRegistrationSuccessMessage();
});

When('User logs out of the application', async ({registrationPage}) => {
    await registrationPage.clickLogoutLink();
});

When('User logs in with newly created credentials', async ({registrationPage}) => {
  await registrationPage.login(username,password)
    
});

Then('Account dashboard should be visible', async ({registrationPage}) => {
    
});
