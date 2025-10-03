function sortNums(arrayOfNums: number[], direction: string): number[] {
    if (direction === 'ascending') return arrayOfNums.sort((a, b) => a - b);
    if (direction === 'descending') return arrayOfNums.sort((a, b) => b - a);

    return arrayOfNums
}


// function sortNums(arrayOfNums, direction) {
//     const sort = arrayOfNums.sort((a, b) => a - b);
//     if (direction === 'asc') {
//         return sort;
//     }
//     if (direction === 'desc') {
//         return sort.reverse();
//
//     }
//
//
// }
