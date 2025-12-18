let spanData = document.getElementById("data-atual");
let botoesSecao = document.querySelectorAll(".btn.btn-light");


botoesSecao.forEach(button => {
    button.addEventListener("click", () => {
        let categoriaEscolhida = button.dataset.categoria;
        console.log(categoriaEscolhida);


    if(categoriaEscolhida === "noticias"){
        document.body.style.transform = "translateX(-100%)";
    setTimeout(function(){
        window.location.href = "noticias.html";
        }, 600);
    }
});
});

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