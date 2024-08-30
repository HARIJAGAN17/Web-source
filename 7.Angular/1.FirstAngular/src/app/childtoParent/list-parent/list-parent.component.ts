import { Component,} from '@angular/core';

@Component({
  selector: 'app-list-parent',
  templateUrl: './list-parent.component.html',
  styleUrls: ['./list-parent.component.css']
})
export class ListParentComponent {
  cars:string[] = [];

  carDataSent(carsData:string[]){
    this.cars = carsData;
  }
}
