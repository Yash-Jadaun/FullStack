// const student ={
//     fullName:"Yash Jadaun",
//     marks:94.4,
//     printMarks:function(){
//         console.log("marks=",this.marks);
//     },
// };


// let arr = ["apple","mango","banana"];

// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };

// const KaranArjun = {
//     salary: 50000,
//     calcTax(){
//         console.log("tax rate is 20%");
//     },
// };

// // Corrected line
// KaranArjun.__proto__ = employee;


//Classes
// class Car{
//     constructor(brand,mileage){
//         console.log("creating new object");
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//     start(){
//         console.log("Car Start");
//     }

//     Stop(){
//         console.log("Car Stops");
//     }

//     setBrand(brand){
//         this.brandName=brand;
//     }




// }

// let fortuner = new Car("fortuner",10);
// fortuner.setBrand("fortuner");

// let lexus = new Car();
// lexus.setBrand("lexus");



//Inheritence
// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// // Create an instance of Child
// let obj = new Child();

// // Call the inherited hello method
// obj.hello(); // Output: hello

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("view website data");
    }
}


//ques1
// let obj = new User("John Doe", "john@example.com");
// obj.viewData(); // Output: "view website data"
// console.log(obj.name);  // Output: "John Doe"
// console.log(obj.email); // Output: "john@example.com"


//ques2
// class Admin extends User {
//     constructor(name,email){
//       super(name,email);
//     }
//    editData(){
//     console.log("Edit website date");
//    }
// }

// let obj = new Admin("Yash","jadaun@gmail.com");
