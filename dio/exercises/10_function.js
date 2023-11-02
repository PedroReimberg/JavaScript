//function
toast1()
toast1()
toast1()

function toast1(){
    console.log("Toasting bread")
}

//function names
let data = 2

function saveData(){
    getData()
    checkValues()
    sentToDatabase()
}

function getData(){
    console.log("Getting user data")
    if (data < 3){
        console.log("Data found")
    }
}
function checkValues(){
    console.log("Checking values")
}
function sentToDatabase(){
    console.log("Sending to database")
}
saveData()

//parameters

toast2("Sliced Bread", 10.99, "Pedro")
toast2("Garlic Bread", 8.99)
toast2("Cheese Bread", undefined, "Pedro")

function toast2(bread, value= 10, name = "Client"){
    console.log(name + "'s toast is ready using " + bread)
    console.log("Price: " + value)
}

//return

