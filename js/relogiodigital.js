const stopwatch = document.getElementById('stopwatchContainer');
const arrow = document.getElementById('arrow');
const diaInaug = 18;
const horaInaug = 19;

function atualizarRelogioDigital() {
    const dataHoraAtual = new Date();
    const dataHoraInaug = new Date(dataHoraAtual.getFullYear(), dataHoraAtual.getMonth(), diaInaug, horaInaug, 0, 0, 0);

    // Calculando a diferença entre as datas
    const diferenca = dataHoraInaug - dataHoraAtual;

    if (diferenca > 0) {
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        const horaFormatada = `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;

        document.getElementById("relogio-digital").innerHTML = horaFormatada;
    } else {
        document.getElementById("relogio-digital").innerHTML = "A inauguração já ocorreu!";
    }
}

function showAndHide() {
    if (stopwatch.style.display === 'none') {
        stopwatch.style.display = 'flex';
        arrow.textContent = '>';
    } else {
        arrow.textContent = '<';
        stopwatch.style.display = 'none';
    }
}

setInterval(atualizarRelogioDigital, 1000);