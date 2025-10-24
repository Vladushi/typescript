"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const button = document.getElementById('checkButton');
button.onclick = function () {
    const age = Number(document.getElementById('ageInput').value);
    if (age < 18) {
        document.write('You are not old enough to vote');
    }
    else {
        document.write('You are old enough to vote');
    }
};
//# sourceMappingURL=main.js.map