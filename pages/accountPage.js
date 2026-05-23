
class AccountPage
{
    constructor(page)
    {
        this.page = page;
        this.accountNumber = this.page.getByRole("row").nth(1).getByRole('link')
        this.balance = this.page.getByRole("row").nth(1).getByRole('cell').nth(1)
        this.availableAmount = this.page.getByRole("row").nth(1).getByRole('cell').nth(2)
    }


    async printAccountNumber()
    {
        const accountNumber = await this.accountNumber.textContent()
        console.log(`Account Number: ${accountNumber}`)
    }

    async printBalanceAmount()
    {
        const balanceAmount = await this.balance.textContent()
        console.log(`Balance Amount: ${balanceAmount}`)
    }

    async printAvailableAmount()
    {
        const availableAmount = await this.availableAmount.textContent();
        console.log(`Available Amount: ${availableAmount}`)
    }
}

module.exports = {AccountPage}