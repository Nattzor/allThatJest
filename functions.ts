export const checkPrimeNumber = (int:number) => {
    for(let i = 2; i < int; i++) {
        if(int % i === 0) return false;
    }
    return int > 1;
}

export const formatName = (name: string): string => {
   return name.endsWith('s')? name : name+'s'
}