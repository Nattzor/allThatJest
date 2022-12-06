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

  export async function getUsers(): Promise<Users[]> {
   const users = [
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
            return users
  }

type Groups = {
    id: number,
    groupName: string
    users?: string[]
}

export async function getGroups(): Promise<Groups[]>{
  const groups = [
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
return groups
}

export async function getGroupsWithUsers() {
    const anvandare = await getUsers()
        console.log(anvandare)
        const grupper = await getGroups()
        console.log(grupper)

        const combined = grupper.forEach(grupp => anvandare.forEach(singleUser => {
          if (singleUser.group === grupp.id){
            grupp.users = []
            grupp.users.push(singleUser.name)
          }
        }))
        console.log(combined)
        return combined

        // const combined =  anvandare.map(t1 => ({...t1, ...anvandare.find(t2 => grupper.id === t1.group)}))
        // return combined
}
getGroupsWithUsers()
