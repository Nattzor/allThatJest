import emailValidator from './EmailValidator';
import zipValidator from './ZipValidator';
import createHeading from './createHeading'
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
    it('should throw an exception if the provided header size doesnt exist')
})

