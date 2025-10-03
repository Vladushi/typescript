type UserType = {id: number, name: string, age: number};

const foobar = (users: UserType[]): void => {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
    }
}

foobar([
    {id: 1, name: 'kokos', age: 123},
    {id: 2, name: 'kokos', age: 123},
    {id: 3, name: 'kokos', age: 123},
    {id: 4, name: 'kokos', age: 123},
    {id: 5, name: 'kokos', age: 123},
]);
