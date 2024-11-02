// console.log("hello");
// let arr=[1,2,3];
// arr.push(4);
// console.log(arr);
 

// function myFunction(){
//     console.log("Wecome to Engineering College");
// }

// myFunction();

// function func(msg){ //Parameter
//     console.log(msg);
// }

// func("I love LBSNAA"); //argument

//sum
// function sum(a,b){
//     console.log(a+b);
// }

// sum(1,2);

// function sum(x,y){
//     s=x+y;
//     return s;
// }
// let val =sum(1,2);
// console.log(val);


//Arrow Functions
// const sum =(a,b)=>{
//  console.log(a+b);
// }

// sum(1,2);

//mul
// const mul =(a,b)=>{
//     console.log(a*b);
// }

// mul(1,2);

//  const arroMul = (a,b)=>{
//   return a*b;   
// }

// let ans = arroMul(1,2);
// console.log(ans);

// const printHello = ()=>{
//     console.log("Hello");
// }

// printHello();

// const contVowels =(str)=>{
//    for(let i of str){
//     if(i=='a' || i=='e' || i=='i' || i=='o' || i=='i' ){
//         console.log(i);
//     }
  
// }
// }
// contVowels("Yash");

// let arr =[1,2,3,4,5];
// arr.forEach(function printVal(val){
//     console.log(val);
// })


// let arr =[1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val*val);
// });


// let arr =[1,2,3];

// nums.map((val)=>{
//     console.log(val);
// }
// )

// let newArr =nums.map((val)=>{
//     return val;
// })

// console.log(newArr);


// let newArr=arr.filter((val)=>{
//     return val % 2 ==0;
// });

// console.log(newArr);

//Reduce Function
// let arr =[1,2,4,6,3,9];
// const output = arr.reduce((prev,curr)=>{
//   return prev>curr ? prev:curr;
// });

// console.log(output);    


//Ques1
// let marks = [80,20,30,91]
// let greaterThen=marks.filter((val)=>{
//   return val>90;
// })

// console.log(greaterThen);

let n=prompt("Enter a number")
let arr=[];
for(let i=1;i<=n;i++){
     arr[i-1]=i;
    
}
console.log(arr);


// let sum =arr.reduce((res,curr)=>{
//     return res+curr;

// })

// console.log(sum);

let prod=arr.reduce((prev,curr)=>4{
    return prev*curr;
})

console.log(prod);