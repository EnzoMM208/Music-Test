const audioFundo = new Audio()
audioFundo.src = './musica/8bit_bomb_explosion.wav'
const personagem = document.querySelector('.run')
const obstaculo = document.querySelector('.obstaculo')
const score = document.querySelector('.points')
const cloud = document.querySelector('.cloud')
const planodefundo = document.querySelector('.planodefundo')
let obstaculoAleatorio = 0
let fundoAleatorio = 0
let cloudAleatorio = 0
//const fundo = 
let obstaculoColisor = 100;
let vivo = true
//console.log(obstaculo)
const jump = () => {
    personagem.classList.add('jump')
    personagem.src = './img/jump1.gif';
    setTimeout(() => {
        if (vivo) {
            personagem.classList.remove('jump')
            personagem.src = './img/run.gif'
            audioFundo.play()
        }

    }, 2000)
}
let points = 1;
let pointsUser = 0;
const loop = setInterval(() => {


    const personagemPosition = +window.getComputedStyle(personagem).bottom.replace('px', '')
    const obstaculoPosition = obstaculo.offsetLeft;
    const cloudPosition = cloud.offsetLeft;
    //console.log(cloudPosition)
    //console.log(personagemPosition)
    if (obstaculoPosition < 0) {
        setTimeout(() => {
            obstaculoAleatorio += 1;
            fundoAleatorio += 1;
            cloudAleatorio += 1;
        }, 50)
    }
    if (obstaculoPosition <= 250 && obstaculoPosition > 0 && personagemPosition <= obstaculoColisor) {

        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obstaculoPosition}px`;

        personagem.style.animation = 'none';
        personagem.style.bottom = `${personagemPosition}px`;

        personagem.src = './img/esplosao.gif';
        personagem.style.width = '250px';
        personagem.style.marginleft = '-10px';

        cloud.style.animation = 'none';
        cloud.style.left = `${cloudPosition}px`;

        vivo = false

        clearInterval(loop)
    } else {
        pointsUser++;
        if (pointsUser > 10) {
            score.innerHTML = points++;
            pointsUser = 0;

            if (obstaculoAleatorio > 20) {
                const meuNumero = getRandomInt(0, 3);
                if (meuNumero == 0) {
                    obstaculo.src = './img/jato2.gif';
                }
                if (meuNumero == 1) {
                    obstaculo.src = './img/jato3.gif';
                }
                if (meuNumero == 2) {
                    obstaculo.src = './img/jato.gif';
                }
                obstaculoAleatorio = 0
            }

            if (fundoAleatorio > 50) {
                const seuNumero = getRandomInt(1, 5);
                console.log(seuNumero)
                // if(seuNumero == 0){
                //     planodefundo.style.background = 'url(./../gifs/fundo1.gif)';
                //     planodefundo.style.backgroundRepeat = 'no-repeat';
                //     planodefundo.style.width = '1000px';
                // }
                if (seuNumero == 1) {
                    planodefundo.style.background = 'url(./img/fundo2.gif)';
                }
                // if(seuNumero == 2){
                //     planodefundo.style.background = 'url(./../gifs/fundo3.gif)';
                // }
                if (seuNumero == 2) {
                    planodefundo.style.background = 'url(./img/fundo4.gif)';
                }
                if (seuNumero == 3) {
                    planodefundo.style.background = 'url(./img/fundo5.gif)';
                }
                if (seuNumero == 4) {
                    planodefundo.style.background = 'url(./img/fundo6.gif)';
                }
                fundoAleatorio = 0
            }

            if (cloudAleatorio > 30) {
                const nossoNumero = getRandomInt(0, 2);
                if (nossoNumero == 0) {
                    cloud.src = './img/nave1.gif';
                }
                if (nossoNumero == 1) {
                    cloud.src = './img/nave2.gif';
                }
                cloudAleatorio = 0
            } console.log(nossoNumero)
        }
    }
}, 10)

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
document.addEventListener('keydown',
    //event
    //if(se a setinha for precionada){chama a funcao para ir para a direita}
    jump)

audioFundo.addEventListener("canplaythrough", (event) => {
    /* the audio is now playable; play it if permissions allow */
    audioFundo.play();
});



