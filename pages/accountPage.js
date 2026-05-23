
class AccountPage
{
    constructor(page)
    {
        this.page = page;
        this.accountNumber = this.page.getByRole("cell").first();

        this.balance = this.page.getByRole("cell").nth(1);
        this.availableAmount = this.page.getByRole("cell").nth(2);
    }


    async printAccountNumber()
    {
        return this.accountNumber;
    }

    async printBalanceAmount()
    {
        return this.balance;
    }

    async printAvailableAmount()
    {
        return this.availableAmount;
    }
}

module.exports = {AccountPage}