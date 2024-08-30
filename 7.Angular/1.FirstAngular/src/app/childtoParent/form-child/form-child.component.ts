import { Component,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-form-child',
  templateUrl: './form-child.component.html',
  styleUrls: ['./form-child.component.css']
})
export class FormChildComponent {

  @Output() carsAdded:EventEmitter<string[]>  = new EventEmitter;

  cars:string[] = [];
  carName:string = "";

  addCar(){
    this.cars.push(this.carName);
    console.log(this.cars);
    this.carName="";
    this.carsAdded.emit(this.cars);
  }
}
