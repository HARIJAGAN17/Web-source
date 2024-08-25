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

//doMessage(222);

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

//class
interface InterfaceClass{
    CallMessage:()=>number
}


let FinalOutput = (obj:InterfaceClass)=>{
  return obj.CallMessage();
}

// function interfaceFunction (){
//     return 2;
// }

let callFunction = ()=>{
    return 22;
}

// console.log(FinalOutput({CallMessage:callFunction}));



//Class

class TestClass {
    private Name: string;
    private age: number;
    private information: () => void;
    personalInfo: () => void;

    constructor(name: string, age: number) {
        this.Name = name;
        this.age = age;
        this.information = () => {
            console.log("Information method: Name:"+this.Name+" age:"+this.age);
        };
        this.personalInfo = () => {
           this.information();
        };
    }
}

let obj1:TestClass = new TestClass("hari",22);

// obj1.personalInfo();

//simplify the code

class SimpleTestClass {
    private information: () => void;
    personalInfo: () => void;

    constructor(private Name: string, private age: number) {
        this.information = () => {
            console.log("Information method: Name:"+this.Name+" age:"+this.age);
        };
        this.personalInfo = () => {
           this.information();
        };
    }
}

let obj2:SimpleTestClass = new SimpleTestClass("harijagan",22);
obj2.personalInfo();