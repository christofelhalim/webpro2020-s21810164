/*
console.log("JavaScript Class & OOP");

//Class & Constructor

const Person = {
    //dibawah ini adalah properti dari person
    firstName: "Stephen",
    lastName: "Curry",
    displayFullName: function(){
        console.log(`${this.firstName} ${this.lastname}`);
    },
};
// Person.displayFullName();
*/
//dibawah ini masih blueprint blm object

class Person{
    //dibawah ini cara mendefinisikan properti
    constructor(firstName, lastName){
        this.firstName= firstName;
        this.lastName= lastName;
    }
    //dibawah ini cara membuat metod
    displayFullName(){
        console.log(`${this.firstName} ${this.lastname}`);
    }
}
/*
    const person1 = new Person("Stephen","Curry");
    console.log(typeof person1);
    person1.displayFullName();
    const person2 = new Person("Stephen","Curry");
    person2.displayFullName();
*/
/*
//Inheritance(pewarisan)
    class student extends Person{
        constructor(firstName, lastName,NIM){
            //super fungsinya memanggil fungsi dari persom
            
            super(firstName,lastName)
            this.NIM = NIM;
            this.age = age;
    //boleh juga sama dg di atas yaitu
            //this.firstName= firstName;
            //this.lastName= lastName;
        }

        displayNIM(){
            console.log(`Your NIM is ${this.NIM}`);
        }
    }
    
    const stephen = new Student ("Stephen","Curry","12133");
    stephen.displayFullName();
    stephen.displayNIM();
*/
 
//Static Member
class student extends Person{
    constructor(firstName, lastName,NIM,age){
        super(firstName,lastName);
            this.NIM = NIM;
            this.age = age;
    }
    //dibawah ini merupakan static member
    static sayHello(){
        console.log(`Hello World`);
    }
    
    displayNIM(){
        console.log(`Your NIM is ${this.NIM}`);
    }
    //Setter dan Getter

    //dibawah ini setter dan getter
    set studentScore(score){
        this.score = score;
    }
    //dibawah ini getter

    get studentScore(){
        return this.score;
        }
    }

const stephen = new Student ("Stephen","Curry","12133",30);
stephen.displayFullName();
stephen.displayNIM();
Student.sayHello();

stephen.studentScore = 90;
console.log(stephen.studentScore);
