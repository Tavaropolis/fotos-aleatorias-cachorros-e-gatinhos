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
    const dadosGato = await fetch('https://cataas.com/cat?json=true');
    const dadosGatoJson = await dadosGato.json();
    htmlGato.classList.remove('hide');
    const urlGato = `https://cataas.com${dadosGatoJson.url}`
    htmlGato.setAttribute('src', urlGato);
}