export {};

declare global {
    interface Array<T> {
        myFilter(predicate: (value: T) => boolean): T[];
    }
}
Array.prototype.myFilter = function <T>(this: T[], predicate: (value: T) => boolean): T[] {
    const arr: T[] = [];
    for (const item of this) {
        if (predicate(item)) {
            arr.push(item);
        }
    }
    return arr;
};

let users: { name: string, age: number, status: boolean }[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

const result = users.myFilter((user) => user.status);

console.log(result);
