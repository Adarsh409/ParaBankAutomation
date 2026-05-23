
class AccountPage
{
    constructor(page)
    {
        this.page = page;
        this.accountNumber = this.page.getByRole("row").nth(1).getByRole('link')
        this.balance = this.page.getByRole("row").nth(1).getByRole('cell').nth(1)
        this.availableAmount = this.page.getByRole("row").nth(1).getByRole('cell').nth(2)
    }

    // Prints account number
    async printAccountNumber()
    {
        const accountNumber = await this.accountNumber.textContent()
        console.log(`Account Number: ${accountNumber}`)
    }

    //Prints Balance amount
    async printBalanceAmount()
    {
        const balanceAmount = await this.balance.textContent()
        console.log(`Balance Amount: ${balanceAmount}`)
    }

    //Prints available amount
    async printAvailableAmount()
    {
        const availableAmount = await this.availableAmount.textContent();
        console.log(`Available Amount: ${availableAmount}`)
    }
}

module.exports = {AccountPage}