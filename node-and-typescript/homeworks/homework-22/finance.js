"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Finance = void 0;
var Finance;
(function (Finance) {
    class LoanCalculator {
        constructor(principal, annualInterestRate, loanTermMonths) {
            this.principal = principal;
            this.annualInterestRate = annualInterestRate;
            this.loanTermMonths = loanTermMonths;
        }
        calculateMonthlyPayment() {
            const monthlyRate = this.annualInterestRate / 12 / 100;
            if (monthlyRate === 0) {
                return this.principal / this.loanTermMonths;
            }
            const growthFactor = Math.pow(1 + monthlyRate, this.loanTermMonths);
            return ((this.principal * monthlyRate * growthFactor) /
                (growthFactor - 1));
        }
    }
    Finance.LoanCalculator = LoanCalculator;
    class TaxCalculator {
        constructor(taxRate) {
            this.taxRate = taxRate;
        }
        calculateIncomeTax(income) {
            return income * (this.taxRate / 100);
        }
    }
    Finance.TaxCalculator = TaxCalculator;
})(Finance || (exports.Finance = Finance = {}));
