const name = "Rushikesh"

const repoCount = 50

// console.log(name + repoCount + "value")

// console.log(`Hello my name is ${name} and my repocount is ${repoCount}`)
//string interpolation

const gameName = new String("Rushike-sh-shinde")
console.log(gameName[3])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('k'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-9,4)
console.log(anotherString)

const anotherString1 = "    Rushikesh     "
console.log(anotherString1)
console.log(anotherString1.trim())

const url = "https://rushikesh.com/rushikesh%20shinde"

console.log(url.replace('%20', '-'))
console.log(url.includes("rushi"))

console.log(gameName.split('-', 2))