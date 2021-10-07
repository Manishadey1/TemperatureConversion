import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exam1Temp';
  selected : any;
  degree:number=0;
  result:number=0;

  temperatureConverter(data:any){
    // C = (F − 32) × 5/9
    this.degree=data;
    if(this.selected === "Fahrenheit"){
      data=parseFloat(data);
      this.result=(data-32) / 1.8;
    }
    if(this.selected === "Kelvin")
    {
      data=parseFloat(data);
      this.result = (data -273.15) ;
    }
  }
}
