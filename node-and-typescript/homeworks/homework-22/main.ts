import { Finance } from "./finance";
import { generateFibonacci, generatePrimeNumbers } from "./sequenceUtils";
import { capitalize, reverseString } from "./stringUtils";
import { UserManagement } from "./userManagement";

console.log("capitalize:", capitalize("typescript"));
console.log("reverseString:", reverseString("homework"));

const loanCalculator = new Finance.LoanCalculator(250000, 12, 36);
const monthlyPayment = loanCalculator.calculateMonthlyPayment();
console.log("monthly loan payment:", monthlyPayment.toFixed(2));

const taxCalculator = new Finance.TaxCalculator(18);
const incomeTax = taxCalculator.calculateIncomeTax(50000);
console.log("income tax:", incomeTax.toFixed(2));

const adminUser = new UserManagement.Admin.AdminUser(
  "Olena Admin",
  "admin@example.com",
  false
);
console.log("admin before update:", adminUser);
adminUser.grantSuperAdmin();
console.log("admin after grant:", adminUser);
adminUser.revokeSuperAdmin();
console.log("admin after revoke:", adminUser);

console.log("fibonacci up to 50:", generateFibonacci(50));
console.log("prime numbers up to 50:", generatePrimeNumbers(50));
