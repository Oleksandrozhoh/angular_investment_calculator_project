import { Component, inject, input, Input } from '@angular/core';
import { AnnualData } from './annual-data.model';
import { CommonModule } from '@angular/common';
import { InvestmentResultsService } from '../investment-results.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  investmentService = inject(InvestmentResultsService);

  get annualData(){
    return this.investmentService.annualData();
  }
}


