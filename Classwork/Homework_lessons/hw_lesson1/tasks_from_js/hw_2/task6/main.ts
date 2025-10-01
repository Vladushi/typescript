let srtValue: string | null = prompt('enter number 1 0 -3');
if(srtValue !== null) {
    let numValue = +srtValue;
    if (numValue !== 0) {
        console.log('right');
    } else {
        console.log('wrong');

    }
}
