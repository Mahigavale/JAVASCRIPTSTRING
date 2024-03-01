//I know this is array method but it was remained so.


let names=['mahesh','ashok','gavale'];

let obj=names.entries();

for(v of obj)
{
    console.log(v);
}
for(var[a,b] of names.entries())
{
    console.log("Index::",a);
    console.log("Value:",b);
}

//remember if you want to directly print the elements of given array
//and also it's indices and values
//then directly take an array for each entry in array
// print the entry individually.