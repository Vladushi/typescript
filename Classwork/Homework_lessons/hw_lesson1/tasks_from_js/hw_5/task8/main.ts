type Primitive = number | string | boolean;

const foobar = (arrayOfPrimitives: Primitive[]): void => {

    document.write(`<ul>`);
    for (const item of arrayOfPrimitives) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);

}

foobar([1123, 123, 12, 312, 321, 3, 'asdads', true]);
