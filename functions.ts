export const checkPrimeNumber = (int:number) => {
    for(let i = 2; i < int; i++) {
        if(int % i === 0) return false;
    }
    return int > 1;
}

export const formatName = (name: string): string => {
   return name.endsWith('s')? name : name+'s'
}

type Arr = {
    name: string;
    group: number;
  };

  export async function getUsers(): Promise<Arr[]> {
    return [
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
    ];
  }

type Groups = {
    id: Number,
    groupName: string
}


export async function getGroups(): Promise<Groups[]>{
   return [
        {
            "id": 1,
            "groupName": "Hajarna"
        },
        {
            "id": 2,
            "groupName": "Valarna"
        },
        {
            "id": 3,
            "groupName": "Zebrorna"
        }
    ]
}