import { Component } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  title ="helloword";
  // count=0;
  // countDuplicate=0;

  // increaseCount(){
  //   this.count++;
  // }
  value:string=""
  value2:string=""
  handleInput(event:Event){

    this.value = (event.target as HTMLInputElement).value;
  }

  
}
