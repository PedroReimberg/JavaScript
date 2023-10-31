//and ( && )
let age = 18
let passport = true

let allowedToTravel = age >= 18 && passport === true

console.log("Allowed to traverl: " + allowedToTravel)

//or ( || )
let weather = "sunny"
let item = "umbrella"
let canLeave = ((weather !== "sunny") || (item === "umbrella"))

console.log("Can you leave: " + canLeave)

//not ( ! or !== )

let sunny = weather === "sunny"
console.log("The weather is sunny? " + sunny)
console.log("The weather is not sunny? " + !sunny)