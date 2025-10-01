type User = {name: string, username: string, password: string};

let user4: User = {name: 'asdas1', username: 'asd', password: '1234'};
let user5: User = {name: 'asdas1', username: 'asd', password: '1234'};
let user6: User = {name: 'asdas1', username: 'asd', password: '1234'};

let users:User[] = [
    user4,
    {name: 'asdas2', username: 'qwe', password: '1234'},
    user5,
    {name: 'asdas3', username: 'dfg', password: '1234'},
    user6,
    {name: 'asdas1', username: 'asd', password: '1234'}
];

console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users[4]);
console.log(users[5]);
