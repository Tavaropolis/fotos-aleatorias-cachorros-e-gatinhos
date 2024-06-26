const botaoGato = document.querySelector('#botao-envio-gato');
const botaoCachorro = document.querySelector('#botao-envio-cachorro');
const htmlGato = document.querySelector('#foto-gato');
const htmlCachorro = document.querySelector('#foto-cachorro');

botaoCachorro.addEventListener('click', fotoCachorro);
botaoGato.addEventListener('click', fotoGato);

async function fotoCachorro() {
    const dadosCachorro = await fetch('https://random.dog/woof.json');
    const dadosCachorroJson = await dadosCachorro.json();
    htmlCachorro.classList.remove('hide');
    htmlCachorro.setAttribute('src', dadosCachorroJson.url);
}

async function fotoGato() {
    const dadosGato = await fetch('https://api.thecatapi.com/v1/images/search');
    const dadosGatoJson = await dadosGato.json();
    htmlGato.classList.remove('hide');
    htmlGato.setAttribute('src', dadosGatoJson[0].url);
}

htmlCachorro.addEventListener('error', () => {
    htmlCachorro.setAttribute('src', './cachorro.jpg');
})

htmlGato.addEventListener('error', () => {
    htmlGato.setAttribute('src', './gato.jpg');
})