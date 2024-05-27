const {fizzBuzzNumbers} = require('../fizzBuzzNumbers')

describe ( "fizzBuzzNumbers", () => {

    it ('Returns FizzBuzz for number divisible by both 5 and 3', () =>{
        expect( fizzBuzzNumbers(30)).toBe('FizzBuzz')
    })
    it ('Returns fizz for number divisible by 3', () =>{
        expect( fizzBuzzNumbers(9)).toBe('Fizz')
    })

    it ('Returns buzz for number divisible by 5', () =>{
        expect( fizzBuzzNumbers(20)).toBe('Buzz')
        expect( fizzBuzzNumbers(10)).toBe('Buzz')
    })
    
    it ('Returns number for number that is not divisible by 5, 3 and both', () =>{
        expect( fizzBuzzNumbers(13)).toBe(13)
    })

})