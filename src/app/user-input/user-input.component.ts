import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type UserData } from './user-data.model';
import { InvestmentResultsService } from '../investment-results.service';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal('0');
  anualInvestment = signal('0');
  expectedReturn = signal('5');
  duration = signal('10');

  constructor(private investmentResultsService: InvestmentResultsService) {}

  onCalculate(){
    console.log('Calculating investment results...');
    
    this.investmentResultsService.onCalculate({
      initialInvestment: +this.initialInvestment(),
      anualInvestment: +this.anualInvestment(),
      expectedReturn: +this.expectedReturn(),
      duration: +this.duration(),
    });

    this.initialInvestment.set('0');
    this.anualInvestment.set('0');
    this.expectedReturn.set('5');
    this.duration.set('10');

  }
}
