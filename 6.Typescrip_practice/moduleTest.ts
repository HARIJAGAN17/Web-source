export class moduleTestClass {
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

