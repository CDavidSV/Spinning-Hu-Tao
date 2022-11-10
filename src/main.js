// Get document elements.
const spinningHuTao = document.getElementById('Hu-Tao');
const txtCounter = document.getElementById('counter');
const muteBtn = document.getElementById('mute-btn');
const themeModeBtn = document.getElementById('theme-mode');
const body = document.getElementById('body-theme');

// Setup audio.
var audio = new Audio('../assets/audio/Hu tao edit Im a Ghost - Audio Edit.mp3');
audio.loop = true;
audio.volume = 0.6;

//Variables.
let rotations = 20320;
let playClicked = false;
let themeClicked = false;
const messages = [
    { spins: "", msg: "" },
    { spins: "", msg: "" },
    { spins: "", msg: "" },
    { spins: "", msg: "" },
    { spins: "", msg: "" },
    { spins: "", msg: "" },
];

// Functions.
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

// Listeners.
spinningHuTao.addEventListener('animationiteration', () => {
    rotations++;
    txtCounter.textContent = formatNumbers(rotations);
});

muteBtn.addEventListener('click', () => {
    if (playClicked) {
        audio.pause();
        muteBtn.src = "../assets/images/muted.svg";
        playClicked = false;
        return;
    }
    audio.play();

    muteBtn.src = "../assets/images/unmuted.svg";
    playClicked = true;
});

themeModeBtn.addEventListener('click', () => {
    if (themeClicked) {
        body.style = "background-color: white;";
        themeModeBtn.src = "../assets/images/dark.svg";
        themeClicked = false;
        return;
    }
    body.style = "background-color: black;";
    themeModeBtn.src = "../assets/images/light.svg";
    themeClicked = true;
});