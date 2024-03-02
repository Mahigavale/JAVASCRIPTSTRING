/*
copy within is used to copy the array elements in the same array.
it works on the three indices.
let arr=[];
log(arr.copywithin(1,0,4))
1:: is the target index where we need to copy the elements.
0::the start index of elements to copy.
4::number of elements to copy in the same array.
*/

 let arr4=[0,1,2,3,4,5,6,7,8,9];

 console.log(arr4.copyWithin(5,0,5));

 

// let  arr=[1,2,3,4];

// console.log(arr.copyWithin(2,0,2));
// //modifies the original array.
// console.log(arr);

// let arr2=['a','b','c','d','e'];
// //o:p=> [abcab]

// console.log(arr2.copyWithin(3,0,2));