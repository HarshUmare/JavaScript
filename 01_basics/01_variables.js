const accountId = 144553
let accountEmail = "harsh@google.com"
var accountPassword = "12345"
accountCity = "Nagpur"

// accountId = 2 // Not Allowed

/* 
 Prefer not to use var
 because of bloack scope and functional scope

 block scope: kisi ek programmer ne variable bnaya var use krke accountPassword
 phir ek aur programmer aaya usne ek for loop use kiya aur uske andr bhi usne accountPassword naam 
 ka ek variable use kr liya --------> toh isse hua ye, ki poore code me accountPasswprd wala variable 
 change ho jaata tha.....

 isliye let use kiya jaata hai jo scope wali problem solve kr leta hai
*/ 

console.log(accountId)

console.table([accountId, accountEmail, accountPassword, accountCity])

accountEmail = "hu@hu.com"
accountPassword = "121212"
accountCity = "Mumbai"

console.table([accountId, accountEmail, accountPassword, accountCity])