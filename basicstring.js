// let str="       I am fearless!     ";
// let str2="  Aaj ke bad !     ";
// let str3=" teri galiyon me na rakhenge kadam !  "
// // console.log(str.toUpperCase());
// // console.log(str.toLowerCase());
// // //we can concat whatever we want.
// // console.log(str.concat("------",str2,str3,"     duniya"));
// // console.log(str.trim());
// // let strfinal=str.trim();
// // console.log(strfinal[0]);
// // //trim removes each and every space from the given string.
// // //clearly.
// // console.log(strfinal[strfinal.length-1]);
// // console.log(str.trimStart());
// // console.log(str.trimEnd());
// let nams="mahesh ashok gavale";
// //console.log(nams.padStart(36).length);
// console.log(nams);
// console.log("spacing at the start:",nams.padStart(36));
// //console.log(nams.length);
// console.log("space at the end of the string:",nams.padEnd(36),"++");



let name="Mahesh MaHeSh ashok gavale";
console.log(name.repeat(5));

console.log(name.replace(/mahesh/i,'dada'));
console.log(name.replace(/mahesh/ig,'dadaas'));

//remember that the sequence in the regex does not
//matters in the string replacement here.
//without regex only the first occurance of the given
//word is replaced and not all the ones.
// /asd/i => regex to case insensitive.
// /asd/g => global replacement.
// /asd/gi=> global case insensitive replacement in given string.


