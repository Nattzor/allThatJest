export const checkPrimeNumber = (int:number) => {
    for(let i = 2; i < int; i++) {
        if(int % i === 0) return false;
    }
    return int > 1;
}

export const formatName = (name: string): string => {
   return name.endsWith('s')? name : name+'s'
}

type Users = {
    name: string;
    group: number;
  };

  const test2: Users[] = [
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

  export async function getUsers(): Promise<Users[]> {
    return test2
  }

type Groups = {
    id: Number,
    groupName: string
}

const test: Groups[] =
[
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

export async function getGroups(): Promise<Groups[]>{
   return test
}

export async function getGroupsWithUsers(test: Groups[], test2: Users[]) {
    const a3 = test.map(t1 => ({...t1, ...test2.find(t2 => t2.group === t1.id)}))
    return a3
}