import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type UserData } from './user-data.model';


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment: number = 0;
  anualInvestment: number = 0;
  expectedReturn: number = 5;
  duration: number = 10;

  @Output() userData = new EventEmitter<UserData>();

  onCalculate(){
    console.log('Calculating investment results...');
    this.userData.emit({
      initialInvestment: this.initialInvestment,
      anualInvestment: this.anualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration
    });



  }
}
