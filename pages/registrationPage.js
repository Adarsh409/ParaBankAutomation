const { CredentialUtils } = require('../utils/credentials-utils');
const { expect } = require('@playwright/test');
class RegistrationPage
{
    constructor(page)
    {
        this.page = page;
        this.username = "";
        this.password = "";
        this.firstNameField = this.page.locator("[id='customer.firstName']");
        this.lastNameField = this.page.locator('[id="customer.lastName"]');
        this.addressField = this.page.locator('[id="customer.address.street"]');
        this.cityField = this.page.locator('[id="customer.address.city"]');
        this.stateField = this.page.locator('[id="customer.address.state"]');
        this.zipField = this.page.locator('[id="customer.address.zipCode"]')
        this.phoneNumberField = this.page.locator('[id="customer.phoneNumber"]');
        this.ssnField = this.page.locator('[id="customer.ssn"]')
        this.userNameField = this.page.locator('[id="customer.username"]');
        this.passwordField = this.page.locator('[id="customer.password"]');
        this.confirmPasswordField = this.page.locator("#repeatedPassword");
        this.registerButton = this.page.getByRole('button', { name: 'Register' })
        this.registrationSuccessMessage = this.page.getByRole("heading",{name:"Welcome"})
        this.logoutLink = this.page.getByRole('link', { name: 'Log Out' })
    }

    async enterFirstName(firstName)
    {
        await this.firstNameField.fill(firstName);
    }

    async enterLastName(lastName)
    {
        await this.lastNameField.fill(lastName);
    }

    async enterAddress(address)
    {
        await this.addressField.fill(address)
    }

    async enterCity(city)
    {
        await this.cityField.fill(city)
    }

    async enterState(state)
    {
        await this.stateField.fill(state)
    }

    async enterZipCode(zipCode)
    {
        await this.zipField.fill(zipCode)
    }

    async enterPhoneNumber(phoneNumber)
    {
        await this.phoneNumberField.fill(phoneNumber)
    }

    async enterSSN(ssn)
    {
        await this.ssnField.fill(ssn);
    }

    async enterUserName(username)
    {
        await this.userNameField.fill(username);
    }

    async enterPassword(password)
    {
        await this.passwordField.fill(password)
    }

    async enterConfirmPassword(password)
    {
        await this.confirmPasswordField.fill(password)
    }

    async clickRegisterButton()
    {
        await this.registerButton.click();
    }

    async getRegistrationSuccessMessage()
    {
        console.log(await this.registrationSuccessMessage.textContent())
    }

    async clickLogoutLink()
    {
        await this.logoutLink.click();
    }

    
    
    async verifyRegistrationSuccessMessage()
    {
        await expect(this.registrationSuccessMessage).toHaveText(`Welcome ${this.username}`);
    }

    async enterRegistrationDetails(registrationData)
    {
        await this.enterFirstName(registrationData['First Name']);
        await this.enterLastName(registrationData['Last Name']);
        await this.enterAddress(registrationData['Address']);
        await this.enterCity(registrationData['City']);
        await this.enterState(registrationData['State']);
        await this.enterZipCode(registrationData['Zip Code']);
        await this.enterPhoneNumber(registrationData['Phone']);
        await this.enterSSN(registrationData['SSN']);
        this.username = CredentialUtils.generateUsername()
        this.password = CredentialUtils.generatePassword()
        await this.enterUserName(this.username);
        await this.enterPassword(this.password);
        await this.enterConfirmPassword(this.password);
         return {
                        username: this.username,
                        password: this.password
                };
    }

}

module.exports = {RegistrationPage}