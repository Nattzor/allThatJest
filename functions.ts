export const checkPrimeNumber = (int:number) => {
    for(let i = 2; i < int; i++) {
        if(int % i === 0) return false;
    }
    return int > 1;
}

export const formatName = (name: string): string => {
   return name.endsWith('s')? name : name+'s'
}

export type Arr = {
    name: string
    group: Number
}

export const getUsers = (arr: Arr) => {
 console.log("testar getUsers",getUsers)
}

const arr = [
    {
        "name": "Erik",
        "group": 1
    },
    {
        "name": "Lisa",
        "group": 2
    },
    {
        "name": "Hampus",
        "group": 2
    },
    {
        "name": "Linda",
        "group": 3
    },
    {
        "name": "Eva",
        "group": 1
    },
    {
        "name": "Anna",
        "group": 3
    }
 ]