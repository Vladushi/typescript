async function foobar<T>(url: string): Promise<T> {
const response = await fetch(url);
const data = await response.json();
return data as T;
}

type User = {
    id: number;
    name: string;
    email: string;
    age: number;
};

(async () => {
    const user = await foobar<User>('https://jsonplaceholder.typicode.com/users/1');
})();

