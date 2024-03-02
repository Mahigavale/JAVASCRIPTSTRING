/*
some is used to check if some elements of the given 
array passes the given condition.
it returns true even if the single element passes the given 
condition.
it behaves liek basically the logical array.
*/

let arr=[1,2,3,4,5,6,7,8,9];

console.log(arr.some((n)=>
{
    return n>=9;
}));