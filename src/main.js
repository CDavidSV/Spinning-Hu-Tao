// Get document elements.
const spinningHuTao = document.getElementById('Hu-Tao');
const txtCounter = document.getElementById('counter');
const muteBtn = document.getElementById('mute-btn');
const themeModeBtn = document.getElementById('theme-mode');
const body = document.getElementById('body-theme');
const messageContent = document.getElementById('content-msg');

// Setup audio.
var audio = new Audio('./assets/audio/Hu tao edit Im a Ghost - Audio Edit.mp3');
audio.loop = true;
audio.volume = 0.3;

//Variables.
let rotations = 0;
let playClicked = false;
let theme = 'white';
let counter = 0;
const messages = [
    { spins: 10, msg: "You like Hu Tao don't you." },
    { spins: 25, msg: "Hu Tao Spiiiin!!!" },
    { spins: 50, msg: "Half a hundred!" },
    { spins: 100, msg: "100 Hu Tao spins!!" },
    { spins: 200, msg: "You still here?" },
    { spins: 500, msg: "Half a thousand spins... You must really like Hu Tao." },
    { spins: 1000, msg: "Damn, I didn't even get to one thousand. There is no suprise you know." },
    { spins: 10000, msg: "Holy, YOU REALLY LIKE HU TAO." },
    { spins: 1000000, msg: "Man you should just work for miHoYo at this point." },
];

// Load cookies.
if (!document.cookie) {
    setCookie("theme", theme);
} else {
    const cookiesObj = getCookie(document.cookie);
    for (let cookieObj of cookiesObj) {
        if(cookieObj.cookie == "theme" && cookieObj.value == "black") {
            body.style = "background-color: black;";
            messageContent.style = "color: white;";
            themeModeBtn.src = "./assets/images/light.svg";
            theme = "black";
        }
    }
}

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

function setCookie(name, value) {
    document.cookie = `${name}=${value}`;
}

function getCookie(cookie) {
    cookiesArr = cookie.split(' ');
    cookiesObj = [];
    for (cookie of cookiesArr) {
        cookiesObj.push({ cookie: cookie.split("=")[0], value: cookie.split("=")[1] });
    }
    return cookiesObj;
}

// Listeners.
spinningHuTao.addEventListener('animationiteration', () => {
    rotations++;
    txtCounter.textContent = formatNumbers(rotations);

    let deleteMsg;
    if (counter < messages.length && rotations >= messages[counter].spins) {
        clearTimeout(deleteMsg);
        messageContent.textContent = messages[counter].msg;
        deleteMsg = setTimeout(() => {
            messageContent.textContent = "";
        }, 15000);
        counter++;
    }
});

muteBtn.addEventListener('click', () => {
    if (playClicked) {
        audio.pause();
        muteBtn.src = "./assets/images/muted.svg";
        playClicked = false;
        return;
    }
    audio.play();

    muteBtn.src = "./assets/images/unmuted.svg";
    playClicked = true;
});

themeModeBtn.addEventListener('click', () => {
    if (theme == "black") {
        body.style = "background-color: white;";
        themeModeBtn.src = "./assets/images/dark.svg";
        messageContent.style = "color: black;";
        theme = 'white';
        setCookie("theme", "white");
        return;
    }
    body.style = "background-color: black;";
    themeModeBtn.src = "./assets/images/light.svg";
    messageContent.style = "color: white;";
    theme = 'black';
    setCookie("theme", "black");
});