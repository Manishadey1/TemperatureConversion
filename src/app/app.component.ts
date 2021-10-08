import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Exam1Temp';
  selected : any;
  degree : number=0;
  result : number=0;
  data : number | undefined;
  display =false ;

  temperatureConverter(data:any){
    // C = (F − 32) × 5/9
    this.display = true
    this.degree=data;
    if(this.selected === "Fahrenheit"){
      console.log(data);
      this.result=(data-32) * 5/9;
    }
    if(this.selected === "Kelvin")
    // C = (K - 273.15)
    {
      this.result = (data -273.15) ;
    }
  }
}

