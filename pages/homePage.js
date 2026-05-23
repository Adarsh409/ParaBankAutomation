
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

    // Enters username for login
    async enterUserName(username)
    {
        await this.loginName.fill(username);
    }

    //Enters password for login
    async enterPassword(password)
    {
        await this.loginPassword.fill(password)
    }

    // Clicks Login button
    async clickLoginButton()
    {
        await this.loginButton.click();
    }

    // User login
    async login(username,password)
    {
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    // Clicks registration link
    async clickRegistrationLink()
    {
        await this.registrationLink.click();
    }

    // Loads the application
    async loadApplication()
    {
        await this.page.goto('/')
    }
}

module.exports = {HomePage}