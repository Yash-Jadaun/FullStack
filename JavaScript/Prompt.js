// let num = prompt("Enter a Number");

// if(num % 5 === 0){
//    console.log(num, "num is multiple of 5");  
// }
// else{
//     console.log(num, " is not a multiple of 5");
// }


//Ques 2.

let num = prompt("Enter the scores of students");
// num = Number(num); // यह सुनिश्चित करने के लिए कि num एक संख्या के रूप में माना जाए

if (80 <= num && num <= 100) {
    console.log("A");
} else if (70 <= num && num < 80) { // यहाँ num < 80 कर दिया गया है
    console.log("B");
} else if (60 <= num && num < 70) {
    console.log("C");
} else if (50 <= num && num < 60) {
    console.log("D");
} else {
    console.log("F");
}
