const months = ["jan","march","april","june","july"];

// months.push("dec");
// console.log(months);

// months.splice(months.length,0,"dec");
// console.log(months);

// const indexToUpdate = months.indexOf("march");
// months.splice(indexToUpdate,1,"March");
// console.log(months);


const indexToDelete = months.indexOf("june");
months.splice(indexToDelete,1);
console.log(months);
