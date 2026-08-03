const accountId = 45545
let accountEmail = "kdgoogle@gmail.com"
var accountPassword = "546266"
accountCity = "jaipur"
let accountState;

// accountId = 2   not allowed
accountCity = "dto"
accountEmail = "abc@mail.com"
accountPassword = "5465"
console.log(accountId);

/*

prefer not to use var
because of block scope and functional scope
*/
console.table([accountId,accountCity,accountEmail,accountPassword,accountState]);


