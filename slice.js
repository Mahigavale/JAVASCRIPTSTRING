let str="I am the best!";
console.log(str.length);

let str2=str.slice(0,6);
//here 6 is not inclued in the output of the string.
//one space is equal to one length.
console.log(str2);
let arr=str.split('');
console.log(arr);

/*
if the second parameter is not provided then it will slice the
rest of the string.
if the negative parameter is provided then it will
count from the end of the string.
*/

let names="mahesh ashok gavale....";
console.log(names.slice(-1));
console.log(names.slice(0));