
//try & catch
//  let a = 1;
//  let b=2;
//  console.log("a");
//  console.log("a");
//  console.log("a+b");

//  try{
//     console.log(a+c);
//  }
//  catch(err){
//     console.log("err");
//  }
 
//  console.log("a");
//  console.log("a");


//Asynchronous Programming
// const hello = () => {
//     console.log("hello");
// };

// setTimeout(hello,2000);



//CallBack

// const sum =(a,b)=>{
//     console.log(a+b);
// }

// const calculate=(a,b,sumCallback)=>{
//     sumCallback(a,b);
// }
// calculate(1,2,sum);



//Async Function

// const api =()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
//     });
    
// }


// async function getWeatherData(){
//     await api();
// }



(async function(){
    console.log("getting data1...");
    await getAllData(1);
    console.log("getting data2...");
    await getAllData(2);
})();







// async function hello (){
//     console.log("hello");
// }


// hello();