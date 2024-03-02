/*
1)the major difference between the slice and substr is,
it takes the length of the part to be extracted rather than the
end index of the string to be extracted here.
negative values are allowed here.


2) the major difference between the substring and substr is,
that the substring takes the end index where as the substr takes
the length of the part to be extratced here.
*/

let names="I am the best indeed.";

console.log(names.substring(0,11));
console.log(names.substr(0,11));

