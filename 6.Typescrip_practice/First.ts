let id: number = 2;
let company: string = "HJ";
let isPassed: boolean  = true;


let ids:number[] = [1,2,33,343];
let x:any = "perro";

let xArr:any[] = ["ep",0,true];
 

// console.log(ids);


enum colors { red=100,blue,green};

let background = colors.blue;

//console.log(background);


//type assertions


//arrow functions 


let doMessage = (message:number)=>{
    console.log(message);
}

doMessage(222);

//creating the own type through interface

interface Point{

    x:number,
    y:string,
    z:number
} 


let draw = (point:Point) =>{

    console.log(point.x);
    console.log(point.y);
    console.log(point.z);
}

// draw({x:1,y:"hello",z:22});



