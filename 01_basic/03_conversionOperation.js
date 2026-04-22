let score=14

console.log(typeof score);
console.log(typeof (score));


let valueInNUm = Number(score);
console.log(valueInNUm);
//score:"14" op:NaN
//score:null op:0
//score:undefined op:NaN
//score:ture op:1
//score:"name" op:NaN

let isLoggedIn = 1;

let iBool = Boolean(isLoggedIn);
console.log(iBool);

//1 => true
//0 => false
//"" => false
//"hi" => true

let stringNum = 33;

let totString = String(stringNum);
console.log(totString);//33
console.log(typeof totString)//string