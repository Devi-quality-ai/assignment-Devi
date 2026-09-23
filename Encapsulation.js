//1. Create private variables and access them using getters/setters. 
class Student {
#name;
constructor(name) {
this.#name = name;
}
getName() {
return this.#name;
}
setName(name) {
this.#name = name;
}
}
let student1 = new Student("Alice");
console.log(student1.getName());
student1.setName("Bob");
console.log(student1.getName());

//2.Create a BankAccount class with deposit and withdraw methods. 
class BankAccount {
constructor(accountHolder, balance) {
this.accountHolder = accountHolder;
this.balance = balance;
}
deposit(amount) {
this.balance += amount;
console.log(`Deposited: ${amount}`);
console.log(`Current Balance: ${this.balance}`);
}
withdraw(amount) {
if (amount <= this.balance) {
this.balance -= amount;
console.log(`Withdrawn: ${amount}`);
console.log(`Current Balance: ${this.balance}`);
} else {
console.log("Insufficient Balance");
}
}
}
// Create object
let account1 = new BankAccount("Alice", 5000);
// Deposit money
account1.deposit(2000);
// Withdraw money
account1.withdraw(1000);
// Withdraw more than balance
account1.withdraw(7000);

//3. Prevent invalid data entry using validation methods. 
class BankAccount1 {
#balance;
constructor(balance) {
this.#balance = balance;
}
setBalance(balance) {
if (balance >= 0) {
this.#balance = balance;
} else {
console.log("Balance cannot be negative.");
}
}
getBalance() {
return this.#balance;
}
deposit(amount) {
if (amount > 0) {
this.#balance += amount;
} else {
console.log("Deposit amount must be greater than 0.");
}
}
withdraw(amount) {
if (amount <= 0) {
console.log("Invalid withdrawal amount.");
} else if (amount > this.#balance) {
console.log("Insufficient balance.");
} else {
this.#balance -= amount;
}
}
}
let account = new BankAccount1(5000);
account.deposit(1000);
console.log(account.getBalance());
account.withdraw(2000);
console.log(account.getBalance());
account.deposit(-500); // Invalid
account.withdraw(10000); // Invalid