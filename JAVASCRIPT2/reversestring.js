// let str = "Yash";


// for( let i=str.length;i>=0;i--){
//    console.log(str[i]);
// }


const palindrome = (str) => {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {  // Loop through the string from both ends
        if (str[i] !== str[j]) {  // If characters don't match
            return "Not palindrome";  // Return "Not palindrome" if mismatch
        }
        i++;
        j--;
    }
    
    return "Palindrome";  // If all characters match, return "Palindrome"
}

let ans = palindrome("Yash");
console.log(ans);
