let number = "1"
console.log(number == "1")

let brand = "Apple"
let result = brand === "Samsung"
console.log(result)

//ip test

let bannedIp = "192.168.0.55"
let userIp = "192.168.0.60"
let access = bannedIp !== userIp
console.log("System allowed: " + access)

//age test

let minimalAge = 18
let userAge = 17
let verifyAge = userAge >= minimalAge

console.log(verifyAge)