
let arr=[10,13,16,17,20,30,40,50];
arr.forEach(double);
function double(number)
{
    if(number%2==0)
    {
        console.log("even number in the array",number);
    }
}
console.log(double);