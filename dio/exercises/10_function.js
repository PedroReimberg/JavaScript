//function
toast()
toast()
toast()

function toast(){
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