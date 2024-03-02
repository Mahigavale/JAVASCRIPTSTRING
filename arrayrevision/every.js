/*
every method checks the every element from the array if
they pass a given condition.
even if one element fails to pass the condtion then the 
output of the given method will be false.
it is basically like the logical and.
input argument of this method is function logic.
every method performs the given function for 
each array element and then returns true if
every elements passes the array.
*/

// let arr=[33,45,67];

// console.log(arr.every((n)=>
// {
//     return n>39;
// }));

let arreven=[2,4,61,80];
console.log('This array is even:',arreven.every((n)=>
{    console.log(n%2==0);
    return n%2==0;
}));