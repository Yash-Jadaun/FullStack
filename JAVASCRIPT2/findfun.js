let num = [1,2,3,4,5];

const result = num.find((currElem,index,arr)=>{
    return currElem>1;
}

);

console.log(result);