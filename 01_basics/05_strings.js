const name = "harsh"   // -------> declaration type one
const repoCount = 10

// console.log(name + repoCount + " Value") 
//uppr wala syntax is outdated


// Syntax to use is: -----> use backticks
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)


// //another way of delaring string
// const gameName = new String('harshumare')
// console.log(gameName)

const newName = new String('harsh')  // --------------> declaration type 2
// undefined
// console.log(newName)

//ek baar uppr wale string declaration methods ko browser k console me run krna
// and check the difference in output of both the declaration types

/*
     In declaration type 1:
          uske output me simple harsh print hoga

     In declaration type 2:
          uske output me String {'harsh'} print hoga
          -- here the string is an object.
*/

// console.log(newName[0]) // h print hoga
// console.log(newName[1]) // a print hoga
// console.log(newName.__proto__) // {} ye print hoga---> object milega, jo ki empty dikhega, 
// // but it is not empty actually, iske andr aur bhi bht saari values hai..

console.log(newName.length) // 5 print hoga 
console.log(newName.toUpperCase())
console.log( newName.charAt(3))
console.log(newName.indexOf('h'))

const newString = newName.substring(0, 4)
console.log(newString)

const newString1 = newName.substring(-8, 4)
console.log(newString1)   // ---> iska mtlb ye -ve value ko ignore krke usko 0 maan lega

const anotherString = newName.slice(-4, 3)
console.log(anotherString)

// trim() start aur end dono k spaces hata deta hai
// lein starttrim bhi hotahai aur end trim bhi hota hai... google it

 
