//switch case break default

let fruit = "Avocado"

switch (fruit){
    case "Orange":
        console.log("Orange Juice")
        break
    
    case "Banana":
    case "Avocado":
        console.log(fruit + " Smoothie")
        break

    case "Apple":
        console.log("Apple Juice")
        break

    default:
        console.log("Fruit is not valid")
}