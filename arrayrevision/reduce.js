// reduce function is used to get the single value from the 
//given array input.

let arr=[10,20,30,40,50];
let i=0;
function demo(total,n)
{
    total+=n;
    i++;

    return("average is:",total/i);
    
    
    return total;
}
console.log(arr.reduce(demo));