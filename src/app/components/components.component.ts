import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Exam1Temp';
  selected : any;
  selected1 : any;
  degree : number=0;
  result : number=0;
  data : number | undefined;
  display =false ;

  temperatureConverter(data:any){
    //°F = (°C × 9/5) + 32
    this.display = true
    this.degree=data;
    if(this.selected === "Celcius"){
      console.log(data);
      this.result=(data * 9/5) + 32;
      
    }
    if(this.selected === "Kelvin")
    //° F = 1.8(K - 273) + 32
    {
      this.result = 1.8 * (data -273) + 32;
    }
  }
}


