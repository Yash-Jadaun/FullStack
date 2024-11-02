
//For Loops
// for(let i=0;i<=100;i++){
//   console.log("Yash Jadaun");
// }

// let sum =0;
// for(let i=0;i<=5;i++){
//     sum+=i;
// }
// console.log(sum);

// for(let i=0;i<=5;i++){
//  console.log(i);
// }

// for(let i=0;i<=10;i++){
//     console.log(i);
// }

//While Loops
// let i =1;
// while(i<=5){
//     console.log("Yash");
//     i++; 
// }


//Do While Loop
// let i =1;
// do{
//     console.log("Yash Jadaun");
//     i++;
// }while(i<=5);


//For-of Loop
// let str = "Yash Jadaun";
// let size=0;

// for(let i of str){
//     // console.log(i);
//     size++;
// }
// console.log(size);


//for in loop

// let student ={
//     name:"Rahul Kumar",
//     age:20,
//     cgpa:7.5,
//     isPass:true
// };


// for(let Key in student){
//     console.log("Key=",Key,"value=",student[Key]);
// }


//Ques
// for(let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


//Ques2
let gameNum = 25;
let userNum=prompt("Guess the game number");
while(userNum !== gameNum){
userNum=prompt("You entered wrong number.Guess again");
}
console.log("congratulations");