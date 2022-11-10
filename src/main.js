const spinningHuTao = document.getElementById('Hu-Tao');
const txtCounter = document.getElementById('counter');

let rotations = 0;
spinningHuTao.addEventListener('animationiteration', () => {
    rotations++;    
    txtCounter.textContent = rotations;
});