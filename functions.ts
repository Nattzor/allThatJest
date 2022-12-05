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

// const allUsers= [
//     {
//         "name": "Erik",
//         "group": 1
//     },
//     {
//         "name": "Lisa",
//         "group": 2
//     },
//     {
//         "name": "Hampus",
//         "group": 2
//     },
//     {
//         "name": "Linda",
//         "group": 3
//     },
//     {
//         "name": "Eva",
//         "group": 1
//     },
//     {
//         "name": "Anna",
//         "group": 3
//     }
//  ]

//  const export getUsers(allUsers) : Promise < any[] > {
//     return allUsers.getObject({
//       name: allUsers.name,
//       group: allUsers.group,
//       ResponseContentType: 'text/plain'
//     })
//       .promise()
//       .then(file => {
//         const data: any[] = _parseData(file.Body.toString());
//         return data;
//       })
//       .catch(error => {
//         return error
//       });

//   }

// const result: Arr[] = await Promise.all(arr.map(async (elem): Promise<Arr> => {
//     await getUsers();
//     return elem;
// }));

// export type Arr = {
//     name: string
//     group: Number
// }

// export const getUsers = (arr: Arr) => {
//  console.log("testar getUsers",getUsers)
// }