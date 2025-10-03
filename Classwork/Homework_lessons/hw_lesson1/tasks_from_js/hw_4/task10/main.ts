function arrayMinValue(numbers:number[]): number | undefined{
    if (numbers.length === 0) return undefined;

  let min: number = numbers[0]!;

    for (let i = 1; i < numbers.length; i++) {
        const number = numbers[i]!;
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(arrayMinValue([99, 11, -123, 22, 33, 44]));
