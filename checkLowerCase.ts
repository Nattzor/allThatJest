export const checkLowerCase = (input: string): boolean => {
    for(let char of input){
        if(char != char.toLowerCase()){
            return false
        }
    }
    return true
}