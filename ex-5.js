function sum(...input) {
  // Start coding here !
// let sum = input.reduce((acc,curr) => acc+curr,0)
let sum = 0
for (let i = 0 ; i < input.length ; i++){
  sum += input[i]
}
return sum

}

let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
