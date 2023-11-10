class cakePan{
    constructor(flavor, filling){
        this.flavor = flavor
        this.filling = filling
    }
    write(){
        console.log(`A delicious ${this.flavor} cake with ${this.filling} filling`)
    }
    bake(){
        console.log(`Baking ${this.flavor} cake`)
    }
}

let partyCake = new cakePan("Chocolate", "Nutella")
let premiumCake = new cakePan("Strawberry", "Chocolate")

console.log(partyCake)
console.log(partyCake.flavor)

partyCake.write()
premiumCake.bake()
premiumCake.write()