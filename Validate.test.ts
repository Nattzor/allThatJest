import emailValidator from './EmailValidator';
import zipValidator from './ZipValidator';
import createHeading from './createHeading';
import priceFormator from './priceFormator'
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
    it('it should return according to the pattern'),()=>{
        expect(priceFormator(232.10542,'%PRICE% kr')).toBe('232.11 kr')
        expect(priceFormator(14, '$%PRICE%')).toBe('$14.00')
        expect(priceFormator(1024.2048, 'USD %PRICE%')).toBe('USD 1024.20')
    }
   

})
