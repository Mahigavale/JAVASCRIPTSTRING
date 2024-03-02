/*
split is used to split the string in the form of the array.
when performig some opeartion on the string try to get that in the 
form of the array. as we can a do everything in the array.
*/

let wafa="it is rare!";

let arr=wafa.split('');
//it splits the string to the character level by default
//remember here there is no space in between.
let arr2=wafa.split(' ');
//it splits the string to the word level.
//one space is provided here.
let arr3=wafa.split('  ');
//it converts the whole string to a single array element.
console.log(arr);
console.log(arr2);
console.log(arr3);