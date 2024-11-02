// alert("Hello Engineer");
// let heading = document.getElementById("heading");
// console.dir(heading);

//DOM Manipulation Tech
//document.getElementById("myId")

// document.getElementsByClassName("myClass");

// document.getElementsByTagName("p")

// let elements = document.querySelectorAll("p");
// console.dir(elements);


// console.dir(document.body.firstChild);

// let p = document.querySelector("p");
// console.log(p);

//Ques 2
//  let h2 = document.querySelector("h2");

//  console.dir(h2.innerText);

//  h2.innerText=h2.innerText + "from Apna College Students";


// let divs = document.querySelectorAll(".box");
// console.log(divs);

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);


// let div = document.querySelector("div");
// div.style.backgroundColor="green";


// let newBtn = document.createElement("button"); // Creates a new <button> element
// newBtn.innerText = "Click Me"; // Sets the button text to "Click Me"
// console.log(newBtn); // Logs the button element to the console

// // let div = document.querySelector("div"); // Selects the first <div> element in the document
// // div.prepend(newBtn); // Appends the button to the selected <div>

// let div = document.querySelector("div");
// div.append(newBtn);

// let newHeading = document.createElement("h1");
// newHeading.innnerHTML="<i>Hi ,i am yash</i>";
// document.querySelector("body").prepend(newHeading);

//Event

let btn1 = document.querySelector("#btn1");
let currMode="light";
// btn1.onclick = () =>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }


btn1.addEventListener("click", ()=>{
    console.log("You are an Engineer");
    if(currMode==="light"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }else{
        currMode="light";
        document.querySelector("body").style.backgroundColor="red";
    }

    console.log(currMode);
});