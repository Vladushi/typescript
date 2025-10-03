function swap(arr: number[], i1:number, i2:number): number[] | string{
    if (i1 < arr.length && i2 < arr.length) {
        let temp = arr[i1]!; // 11
        arr[i1] = arr[i2]!;
        arr[i2] = temp;

        return arr;
    }
    return '!!!!!!!';
}

console.log(swap([11, 22, 33, 44], 2, 30));
