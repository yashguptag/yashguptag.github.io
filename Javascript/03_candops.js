let score = false

console.log(typeof score);
console.log(typeof(score)); // both are same, this is like method
let newScore = Number(score)  // N is captal here
console.log(typeof newScore);
console.log(newScore)
console.log(score)


// "33" = 33
// "33abc" = NaN (whose type is still a number)
// true = 1, false = 0

let isLoggedIn = 1 
let isInBoolean = Boolean(isLoggedIn)
console.log(typeof isInBoolean);
console.log(isInBoolean)

// ""= false, "hitesh"= true