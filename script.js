const horasSpan = document.querySelector("#horas");
const minutosSpan = document.querySelector("#minutos");
const segundosSpan = document.querySelector("#segundos");

function atualizarHora() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();
    horasSpan.innerHTML = formatarHora(horas);
    minutosSpan.innerHTML = formatarHora(minutos);
    segundosSpan.innerHTML = formatarHora(segundos);
}

function formatarHora(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}

atualizarHora();
setInterval(atualizarHora, 1000);
