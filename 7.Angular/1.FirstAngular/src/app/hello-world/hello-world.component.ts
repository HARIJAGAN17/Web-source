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

  movieList= [
    {
        title: "Inception",
        director: "Christopher Nolan",
        rating: 8.8
    },
    {
        title: "The Matrix",
        director: "The Wachowskis",
        rating: 8.7
    },
    {
        title: "Parasite",
        director: "Bong Joon-ho",
        rating: 8.6
    },
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        rating: 9.3
    },
    {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        rating: 8.9
    }
]



  
}
