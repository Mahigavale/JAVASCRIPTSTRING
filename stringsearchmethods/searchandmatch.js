let str="I am doing great and I am fullfilling my dreAms.";


console.log(str.search('xyz'));
//returns -1 if the given substring is not found.
console.log(str.search('am'));
// //==comment
// /asdf/gi== regular expression.
console.log(str.match(/am/gi));
//match takes the regex as input and returns accordingly.
