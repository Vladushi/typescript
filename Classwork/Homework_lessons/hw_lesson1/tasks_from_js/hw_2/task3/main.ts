type Author = {name: string, age: number};
type Book = {
    title: string,
    pageCount: number,
    genre: string,
    authors: Author[]
}

let book1: Book = {
    title: 'asdasd',
    pageCount: 123213,
    genre: 'music',
    authors: [
        {
            name: 'asdasd',
            age: 20
        },
        {
            name: 'asdasd',
            age: 20
        }
    ]
}
