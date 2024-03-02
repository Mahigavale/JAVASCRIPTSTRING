//replace all is used to replace all the occurances from the 
//given string.


let names='mahesh ashok gavale Mahesh Ashok Gavale.';

console.log(names.replaceAll(/mahesh/g,'aa'));
console.log(names.replaceAll(/Mahesh/ig,'aa'));
console.log(names.replaceAll(/mahesh/i,'aa'));
//throws error in the last log statement as it is
//called with the non global expression.
//by default it is the global expresson associated with
//the replace all