const spinningHuTao = document.getElementById('Hu-Tao');
const txtCounter = document.getElementById('counter');
let rotations = 0;

function formatNumbers(number) {
    let numberString = "";
    let numberStringRev = "";
    const numbersArr = String(number).split("");

    let counter = 1;
    for (let i = numbersArr.length - 1; i > -1; i--) {
        if (counter % 4 === 0) {
            numberString += ','
        }
        numberString += numbersArr[i];
        counter++;
    }
    for (let i = numberString.length - 1; i > -1; i--) {
        numberStringRev += numberString[i];
    }

    return numberStringRev;
}

spinningHuTao.addEventListener('animationiteration', () => {
    rotations++;
    txtCounter.textContent = formatNumbers(rotations);
});