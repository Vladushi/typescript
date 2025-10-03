class User {
    private id: number;
    private name: string
    private surname: string;
    private phone: string;

    constructor(id: number, name: string, surname: string, phone: string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
    }
}

const user = new User(1, 'kokos', 'asdqwe', '+964657983');
console.log(user);

let users = [
    new User(1, 'kokos', 'asdqwe', '+964657983'),
    new User(2, 'kokos', 'asdqwe', '+964657983'),
    new User(3, 'kokos', 'asdqwe', '+964657983'),
    new User(4, 'kokos', 'asdqwe', '+964657983'),
    new User(5, 'kokos', 'asdqwe', '+964657983'),
    new User(6, 'kokos', 'asdqwe', '+964657983'),
    new User(7, 'kokos', 'asdqwe', '+964657983'),
    new User(8, 'kokos', 'asdqwe', '+964657983'),
    new User(9, 'kokos', 'asdqwe', '+964657983'),
    new User(10, 'kokos', 'asdqwe', '+964657983'),
    new User(321, 'asdasd', 'qweqwe', '+.65464654654')
];
console.log(users);
