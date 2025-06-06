import { Injectable, signal } from "@angular/core";
import { type UserData } from "./user-input/user-data.model";
import { type AnnualData } from "./investment-results/annual-data.model";

@Injectable({providedIn: 'root'})
export class InvestmentResultsService {
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

    }
}