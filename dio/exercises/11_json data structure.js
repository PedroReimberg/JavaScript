//json structure
let invoice = {
    name: "Pedro",
    age: 24,
    products:{
        0: ["Logitech G PRO X Superlight", 49.99],
        1: ["Keychron K10J1", 59.99],
        2: ["LG Ultra Gear 27", 89.99]
    }
}

//code
generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`Name: ${invoice.name}`)
    console.log(`Age: ${invoice.age}`)
    console.log("Products: ")
    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`${productName}: ${productPrice}$`)
    }
}