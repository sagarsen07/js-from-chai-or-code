const accountId = 144553
let accountEmail = "sagar@google.com"
var accountPassword = " 12345"
accountCity = "Ghaziabad"
let accountState

//accountId = 2 // not allowed to change the value of a constant 
accountEmail = "sen@xyz.com"
accountPassword = "gdsdjflkjs"
accountCity = "noida"

console.log(accountId);

console.table ([accountEmail, accountId, accountPassword, accountCity, accountState])

/*
prefer not to use var due to issues in block scope
*/