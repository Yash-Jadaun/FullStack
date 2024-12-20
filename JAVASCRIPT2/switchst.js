var areaOfShapes = "circle";
var a=5;
var b=10;
var result;

switch(areaOfShapes){
    case "square":
        result = a*a;
        console.log(result);
        break;

    case "rectangle":
        result = a*b;
        console.log(result);
        break;
        
     case "circle":
        var radius=2;
        result=2*3.14*radius;
        console.log(result);
        break; 
        
        
}