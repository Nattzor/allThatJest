import emailValidator from './EmailValidator';
import zipValidator from './ZipValidator';
import createHeading from './createHeading';
import priceFormator from './priceFormator'
import {checkLowerCase} from './checkLowerCase'
import {checkPrimeNumber, formatName, getUsers} from './functions'
describe("email validator", ()=>{
    it("should throw exception when email is missing @", ()=>{
        expect (()=> emailValidator("jonatangmail.com")).toThrow("Must contain @")
})
    it("should throw exception when email is missing a domain", ()=>{
    expect (()=> emailValidator("jonatan@gmail")).toThrow("Must contain a domain")
})
})

describe("zip validator", ()=>{
    it("should throw exception when zip is not 5 numbers long", ()=>{
        expect (()=> zipValidator("222")).toThrow("zip should be 5 characters long")
})
    it("should throw exception when zip is not number", ()=>{
    expect (()=> zipValidator("defde")).toThrow("zip must be numbers")
})
// it("should pass correct zip", ()=>{
//     expect (()=> zipValidator("12345")).toEqual('ok')
//     expect(zipValidator('12345')).toHaveReturnedWith('ok')
// })
})

describe('Create heading', () => {
    it('should take return a heading with the given size and content', ()=>{
        expect(createHeading('jesting testing', 2)).toBe('<h2>jesting testing</h2>')
    })
    // it('should throw an exception if the provided header size doesnt exist')
})

describe('Check price format', ()=> {
    it('it should round up to 2 floats ',()=>{
        expect(priceFormator(232.10542)).toBe('232.11 SEK')
    })
    it('it should add SEK',()=>{
        expect(priceFormator(14)).toBe('14.00 SEK')
    })
    it('it should remove extra floats',()=>{
        expect(priceFormator(1024.2048)).toBe('1024.20 SEK')
    })
    it('it should add USD',()=>{
        expect(priceFormator(14, 'USD')).toBe('14.00 USD')
    })

    // it('should throw exeption when more than 2 floats',()=>{
    //     expect(()=>priceFormator(1024.2048)).toThrow("more than 2 floats")
    // })
    it('it should return according to the pattern',()=>{
        expect(priceFormator(232.10542,'%PRICE% kr')).toBe('232.11 kr')
        expect(priceFormator(14, '$%PRICE%')).toBe('$14.00')
        expect(priceFormator(1024.2048, 'USD %PRICE%')).toBe('USD 1024.20')
    })

})

describe('check Lower case', () => {
    it('it should return true if a string has no uppercase letters',()=>{
        expect(checkLowerCase('all lower case string')).toBe(true)
    })
    it('return false if input contains uppercase letters',()=>{
        expect(checkLowerCase('string with Some Uppercase characters')).toBe(false)
    })
})
describe('check if prime number', () => {
    it('it should return true a number is a prime number',()=>{
        expect(checkPrimeNumber(7)).toBe(true)
    })
    it('return false if a number is not a prime number',()=>{
        expect(checkPrimeNumber(10)).toBe(false)
    })
})
describe('return with genetiv', () => {
    it('it should return a name in the genetiv form',()=>{
        expect(formatName('Carola')).toBe('Carolas')
    })
    it('It should should not add an S if the name ends on an S',()=>{
        expect(formatName('Niklas')).toBe('Niklas')
    })
});

    describe('return list of arr', () => {
        test('the arr contains Erik and group 1', () => {
            return getUsers().then(data => {
                expect(data[0]).toEqual({name: 'Erik', group: 1});
        });
    })
})
