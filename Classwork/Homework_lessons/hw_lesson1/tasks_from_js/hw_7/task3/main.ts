class User {

    id: number;
    name: string;
    surname: string;
    phone: string;

    constructor(id: number, name: string, surname: string, phone: string) {
        this. id = id;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
    }
}

let users: User[] = [
    new User(8, 'kokos', 'asdqwe', '+964657983'),
    new User(2, 'kokos', 'asdqwe', '+964657983'),
    new User(10, 'kokos', 'asdqwe', '+964657983'),
    new User(4, 'kokos', 'asdqwe', '+964657983'),
    new User(5, 'kokos', 'asdqwe', '+964657983'),
    new User(6, 'kokos', 'asdqwe', '+964657983'),
    new User(1, 'kokos', 'asdqwe', '+964657983'),
    new User(7, 'kokos', 'asdqwe', '+964657983'),
    new User(9, 'kokos', 'asdqwe', '+964657983'),
    new User(3, 'kokos', 'asdqwe', '+964657983'),
    new User(321, 'asdasd', 'qweqwe', '+.65464654654')
];


console.log(users.sort((user1, user2) => user1.id - user2.id));
