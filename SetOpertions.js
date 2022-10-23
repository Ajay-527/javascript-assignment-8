// creation of new set object
let createSet = new Set();

//Adding the elements set object
createSet.add(1);
createSet.add(5).add("some text"); // chainable
console.log(createSet.delete(5)); // Removes an item from a set object

console.log(createSet.clear()); // Removes all items from a set object
