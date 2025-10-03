function stringToArray(str:string): string[] {
    if (str) {
        const split = str.split(' ');
        return split;
    }
    return [''];

}

console.log(stringToArray('sad asd'));
