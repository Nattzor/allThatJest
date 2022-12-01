import emailValidator from './EmailValidator';
import zipValidator from './ZipValidator';
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

