// console.log(2 > 1) //true
// console.log(2 >= 1) //true
// console.log(2 < 1) //false
// console.log(2 == 1) //false
// console.log(2 != 1) //true

// console.log("2" > 1); //true --> js ne automatically nuber me convert kr diya
// console.log("02" > 1); //true --> same uppr wala reason


// console.log(null > 0) // false
// console.log(null == 0) //false
// console.log(null >= 0) //true

/*
 The reason is that an equality check == and comparisions > < >= <= work diffrently.
 Comparisions convert null to a number, treating it as 0.
 That's why (3) null >= 0 is 0 and (1) null > 0 is false.
*/

// console.log(undefined == 0); //false
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false
// console.log(undefined >= 0); //false


// strict check -----> isko === se check krna hot hai

console.log("2" === 2);  //false



