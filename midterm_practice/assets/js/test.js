const account = {
    accountNumber : null,
    balance : 0.0,
    accountType : null,

    toString: function() {
        return "{ AccountNumber: "+ this.accountNumber +", balance: " + this.balance + ", AccountType: " + this.accountType+" }";
    }
}

const savingsAccount = Object.create(account);
savingsAccount.accountNumber = "10001";
savingsAccount.balance = 125000.00;
savingsAccount.accountType = "Savings";
console.log(savingsAccount.toString());

const checkingAccount = Object.create(account);
checkingAccount.accountNumber = "10002";
checkingAccount.balance = 75090.50;
checkingAccount.accountType = "Checking";
console.log(checkingAccount.toString());

savingsAccount.addInterest = function(interestRate) {
    this.balance = this.balance * (1 + interestRate/100);
};
savingsAccount.addInterest(1.5);
console.log(savingsAccount.toString());

checkingAccount.deductMaintenanceFee = function(maintenanceFeeRate) {
    this.balance = this.balance * (1 - maintenanceFeeRate/100);
};
checkingAccount.deductMaintenanceFee(10);
console.log(checkingAccount.toString());