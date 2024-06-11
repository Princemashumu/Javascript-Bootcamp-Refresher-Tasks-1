//Exercise 1: Numbers
let Number = 100
let FloatNumber = 100.5
let Add = Number + FloatNumber
let Subtract = Number - FloatNumber
let Multiply =Number + FloatNumber
let Divide = Number/FloatNumber
let Expo = Number ** FloatNumber
let Mod =Number % FloatNumber


console.log(" Addition: " +Add)
console.log(" Subtraction: " +Subtract)
console.log(" Multiplication: " +Multiply)
console.log(" Division: " +Divide)
console.log(" Modulus: " +Expo)
console.log(" Exponentiation: " +Mod)

//Exercise 2: Boolean and Operators

let Solution = console.log(10 <= 15)
let x =8
let y=12

let GreaterThan = x>y
let LessThan = x<y
let equalTo = x==y
let NotEqualTo = x != y

console.log("Is "+ x + " greater than "+ y +": "+ GreaterThan)
console.log("Is "+ x + " less than "+ y +": "+ LessThan)
console.log("Is "+ x + " equal to "+ y +": "+equalTo)
console.log("Is "+ x + " not equal to "+ y +": "+NotEqualTo)


let a =true
let b =false
let AND = a && b
let OR = a || b
let NOT = !a

console.log( a + " AND " + b +" : "+AND)
console.log( a + " OR " + b +" : "+AND)
console.log( " NOT: "+ a +": "+ NOT)



let p =10
let result

result = p += 10
console.log(result)
result = p -= 10
console.log(result)
result = p *= 10
console.log(result)
result = p /= 10
console.log(result)
result = p %= 10
console.log(result)

