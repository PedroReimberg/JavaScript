//vector example

let pokemon = ["Pikachu" , "Charmander" , "Bulsasaur"]

console.log(pokemon)
console.log(pokemon[0])
console.log(pokemon[1])
console.log(pokemon[2])

// remove last element
pokemon.pop()

console.log(pokemon)

//array example

pokemonCollection = [
    ["Pikachu" , "Male" , "Level 1"], 
    ["Charmander" , "Female" , "Level 4"],
    ["Bulsasaur" , "Male" , "Level 1"]
]

console.log("The pokemon " + pokemonCollection[1][0] + " is " + pokemonCollection[1][2] + " and the gender is " + pokemonCollection[1][1])

//functions

console.log("Array size: " + pokemonCollection.length)