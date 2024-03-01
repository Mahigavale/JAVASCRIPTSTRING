/*
there are three methods to extract the subparts of the strings in the 
javascript.
there are different methods for the extraction of the 
characters from the given strings.
1)At
2)charAt
3)charCodeAt
4)[]=>

to extract the sub string 
1)slice(start,end)
2)substring(start,end)
3)substr(start,length)
*/


let str2=new String("I am the best !");
console.log(str2);

let str3=String("I am the best!");
console.log(str3);

let str4=str3.slice(-3,-1);
console.log(str4);
let str5=str3.substring(3,-1);
console.log(str5);