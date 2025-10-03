class Client {
    id: number;
    name:string;
    surname:string;
    email:string;
    phone:string;
    order: Product[];

    constructor(id: number, name: string, surname: string, email:string, phone:string, order: Product[]) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

class Product {
    title: string;
    price: number;

    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
}

const client = new Client(1,
    'asd',
    'qwe',
    'asd@asd.com',
    '+39764645',
    [new Product('tv', 13000),
    new Product('phone', 125454)]
);

let clients: Client[] = [
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
    new Client(1, 'asd', 'qwe', 'asd@asd.com', '+39764645', [{title: 'tv', price: 13000}, {title: 'phone', price: 987654}]),
];

console.log(client.order);
