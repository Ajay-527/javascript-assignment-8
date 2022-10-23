var set = new Set();
for (let i = 0; i < 4; i++) {
  let num = Math.ceil(Math.random() * 10);
  set.add(num);
  console.log(num);
}
console.log(set.has(8));
