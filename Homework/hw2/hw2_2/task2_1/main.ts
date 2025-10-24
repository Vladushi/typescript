const button = document.getElementById('checkButton') as HTMLButtonElement;

button.onclick = function (): void {
    const age = Number((document.getElementById('ageInput') as HTMLInputElement).value);
    if(age < 18) {
        document.write('You are not old enough to vote');
    } else {
        document.write('You are old enough to vote');
    }
};
