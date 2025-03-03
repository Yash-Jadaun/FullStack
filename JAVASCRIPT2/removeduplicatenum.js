// let arr = [1, 2, 3, 4, 4, 5, 6];
// console.log([new Set(arr)]);


// let arr = [5,6,3,4,2,8];
// let ans = arr.sort();

// console.log(ans);

//Sort Ascending order
// let ans = arr.sort((a,b)=>{
//     if(a>b) return 1;
//     if(b>a) return -1;
// }

// );

// console.log(ans);


//sort in descending order
// let ans = arr.sort((a,b)=>{
//     if(a>b) return -1;
//     if(b>a) return 1;
// }

// );

// console.log(ans);


// let nums = [1,2,3,4];

// let ans = nums.map((currElem)=>{
//     return currElem*2;
// }

// );

// console.log(ans);



// let name = ["yash","devansh","prashant"];

// const ans = name.map((currElem)=>{
//   return currElem.toUpperCase();
// }

// );

// console.log(ans);


// let num = [1,2,3,4];

// let ans = num.map((currElem)=>{
//     if(currElem%2==0){
//         return currElem*2;
//     }
//     else{
//         return currElem;
//     }
// }

// );


// console.log(ans);




// let name = ["Yash","Dev"];

// let ans = name.map((currEle)=>{
//      return `Mr.${currEle}`;
// }

// );

// console.log(ans);


//Accumulator
// let name = [1,2];
// let ans = name.reduce((accum,currEle)=>{
//      return accum + currEle;
// },

// 0);

// console.log(ans);






// let num = [1,2,3];


// let ans = num.reduce((accumulator,currElem)=>{
//       return accumulator+currElem;
// }

// ,0);

// console.log(ans);



// let str = " yash ";

// console.log(str.length);



// let str = "Hey I am \"Yash Jadaun\" ";

// console.log(str);

// console.log(str.indexOf("I"));


// console.log(Array.from(str));


// let text = "Engineer Engineer";

// let result = text.match(/engineer/i);

// console.log(result);



let text = "Engineer Engineer";

let result = text.match(/engineer/gi);

console.log(result);


