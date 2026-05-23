
class HomePage
{
    constructor(page)
    {
        this.page = page;
        this.registrationLink = this.page.getByRole('link', { name: 'Register' })
        this.loginName = this.page.locator('input[name="username"]')
        this.loginPassword = this.page.locator('input[name="password"]')
        this.loginButton = this.page.getByRole('button', { name: 'Log In' })
    }

    async enterUserName(username)
    {
        await this.loginName.fill(username);
    }

    async enterPassword(password)
    {
        await this.loginPassword.fill(password)
    }

    async clickLoginButton()
    {
        await this.loginButton.click();
    }

    async login(username,password)
    {
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async clickRegistrationLink()
    {
        await this.registrationLink.click();
    }

    async loadApplication()
    {
        await this.page.goto('/')
    }
}

module.exports = {HomePage}