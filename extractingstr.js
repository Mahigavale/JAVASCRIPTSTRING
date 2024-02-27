/*
there are various methods to extract the characters or properties of
the string in the js.
1)At
2)charAt
3)charCodeAt
4)[]=> like the array.
let us see them one by one.
*/

let str='mahesh ashok gavale';
console.log(str);
console.log(str.charAt(3));
console.log(str.charCodeAt(3));
console.log(str.charAt(str.length-1));
console.log(str.charCodeAt(str.length-1));

// let v=str.At(-2);
// console.log(v);

console.log(str[3]);

str[3]='x';
//you can assign the value at the specific index using the array
//it wont give you any error but it wont 
//update or modify the given string.
console.log(str[3]);

