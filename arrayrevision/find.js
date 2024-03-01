
let arr=[1,2,3,4,5,6];
//var number;

function myfunction(number)
{
if(number>5)
{
    return number;
}
}
console.log(arr.find(myfunction));

console.log(myfunction(4));