// Generated from: features/account.feature
import { test } from "../../stepdefs/fixtures.js";

test.describe('User Account set up', () => {

  test('Account creation and verify successful login access', async ({ Given, When, Then, And, accountPage, homePage, registrationPage, sharedState }) => { 
    await Given('User launches the application', null, { homePage }); 
    await When('User clicks the Register link', null, { homePage }); 
    await And('User enters the following registration details:', {"dataTable":{"rows":[{"cells":[{"value":"First Name"},{"value":"Jane"}]},{"cells":[{"value":"Last Name"},{"value":"Doe"}]},{"cells":[{"value":"Address"},{"value":"123 Automation Way"}]},{"cells":[{"value":"City"},{"value":"Tech City"}]},{"cells":[{"value":"State"},{"value":"Karnataka"}]},{"cells":[{"value":"Zip Code"},{"value":"560001"}]},{"cells":[{"value":"Phone"},{"value":"9876543210"}]},{"cells":[{"value":"SSN"},{"value":"123-456-7890"}]},{"cells":[{"value":"User Name"},{"value":"Test User13"}]},{"cells":[{"value":"Password"},{"value":"TestPass@123"}]}]}}, { registrationPage, sharedState }); 
    await And('User clicks Register button', null, { registrationPage }); 
    await Then('Success message should be displayed', null, { registrationPage }); 
    await When('User logs out of the application', null, { registrationPage }); 
    await And('User logs in with newly created credentials', null, { homePage, sharedState }); 
    await Then('Account details should be visible', null, { accountPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features/account.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User launches the application","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User clicks the Register link","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And User enters the following registration details:","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"And User clicks Register button","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Success message should be displayed","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When User logs out of the application","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And User logs in with newly created credentials","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then Account details should be visible","stepMatchArguments":[]}]},
]; // bdd-data-end