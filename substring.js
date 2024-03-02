/*
substring is similar to slice the only diference is that
it treats negative values as zero.
so it is not possible to access the string values from the
end of the string.
*/

let names="I am js user in the town.";

console.log(names.substring(-2,5));