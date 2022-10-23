// Can we put duplicate values in the set object
//Ans:NO,Below given Example

let dupset = new Set();
dupset.add(5);
dupset.add(10);
dupset.add(15);
dupset.add(25);
dupset.add(25);
console.log(dupset);
