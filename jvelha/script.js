const celulas = document.querySelectorAll(".celula")
let checarTurno = true;
const jogador_X = "X";
const jogador_O = "O";

document.addEventListener("click", (event) => {
    if(event.target.matches(".celula")){
        jogar(event.target.id)
    }
});
function jogar(id){
    const celula = document.getElementById(id)
    turno = checarTurno ? jogador_X : jogador_O;
    celula.textContent = turno
    checarTurno = !checarTurno;
}

