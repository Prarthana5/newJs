console.log("2">1);
//true because it will convert string to number

console.log(null > 0); //false
console.log(null == 0); //false beacause null is only equal to undefined 
console.log(null >= 0); // true beacuse it will convert null to 0

// The reason is that an equality check == 
//and comparsion > < >= and <= work differently
//Comparison convert null to a number, trating as 0
//Thats why null >= 0  is true, but null > 0 is false
//same for undefined
 