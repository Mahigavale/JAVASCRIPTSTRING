/*
with is used to modify the array without having modify to
original array.
it is protected method in array.
*/

let names=['a','b','c','d','e'];
let names2=names.with(4,'asdfgh');
console.log(names2);
// remember here we cannot add the non existent element here.
//we only can change it.
//by replacing the original element there.