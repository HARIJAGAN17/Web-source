import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  cars:string[] = [];
  carName:string = "";

  addCar(){
    this.cars.push(this.carName);
    console.log(this.cars);
    this.carName="";
  }
}
