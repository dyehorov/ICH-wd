export namespace Finance {
  export class LoanCalculator {
    constructor(
      private readonly principal: number,
      private readonly annualInterestRate: number,
      private readonly loanTermMonths: number
    ) {}

    calculateMonthlyPayment(): number {
      const monthlyRate = this.annualInterestRate / 12 / 100;

      if (monthlyRate === 0) {
        return this.principal / this.loanTermMonths;
      }

      const growthFactor = Math.pow(1 + monthlyRate, this.loanTermMonths);

      return (
        (this.principal * monthlyRate * growthFactor) /
        (growthFactor - 1)
      );
    }
  }

  export class TaxCalculator {
    constructor(private readonly taxRate: number) {}

    calculateIncomeTax(income: number): number {
      return income * (this.taxRate / 100);
    }
  }
}
