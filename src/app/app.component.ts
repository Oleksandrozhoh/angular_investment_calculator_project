import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { type UserData } from './user-input/user-data.model';
import { type AnnualData } from './investment-results/annual-data.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  annualData = signal<AnnualData[]>([]);

  onCalculate(userData: UserData) {
    let annualDataTemp: AnnualData[] = [];
  let investmentValue = userData.initialInvestment
  for (let i = 0; i < userData.duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (userData.expectedReturn / 100);
    investmentValue += interestEarnedInYear + userData.anualInvestment;
    const totalInterest =
      investmentValue - userData.anualInvestment * year - userData.initialInvestment;

    annualDataTemp.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: userData.anualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: userData.initialInvestment + userData.anualInvestment * year,
    });
  }

  this.annualData.set(annualDataTemp);

  console.log('Investment results calculated:', this.annualData());
 }
}
