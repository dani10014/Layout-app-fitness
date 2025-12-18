let spanData = document.getElementById("data-atual");

function atualizarRelogio(){
    let dataAtual = new Date();

    let horaAtual = dataAtual.toLocaleTimeString("pt-BR", {hour: '2-digit', minute: '2-digit'});
    let tagHorario = document.getElementById("horario");

    tagHorario.innerHTML = horaAtual;

}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);

const dataParaWidget = new Date();
const dataFormada = dataParaWidget.toLocaleDateString("pt-BR")
spanData.innerText = dataFormada;