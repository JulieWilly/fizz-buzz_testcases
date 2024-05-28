// import { fizzBuzzNumbers } from "./fizzBuzzNumbers";
const {fizzBuzzNumbers} = require("./fizzBuzzNumbers")
for (let i = 0; i <= 100; i++) {
    if (fizzBuzzNumbers(i) !== "Fizz" && fizzBuzzNumbers(i) !== "Buzz" && fizzBuzzNumbers(i) !== "FizzBuzz"){
        console.log(i)
    } else {
        console.log(i)
    }

}