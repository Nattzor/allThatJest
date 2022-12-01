import emailValidator from './EmailValidator';
describe("email validator", ()=>{
    it("should throw exception when email is missing @", ()=>{
        expect (()=> emailValidator("jonatangmail.com")).toThrow("Must contain @")
})
    it("should throw exception when email is missing a domain", ()=>{
    expect (()=> emailValidator("jonatan@gmail")).toThrow("Must contain a domain")
})
})