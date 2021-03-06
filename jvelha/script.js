const celulas = document.querySelectorAll(".celula")
//let checarTurno = true; //sigle player
let fimJogo  = false;
const jogador_X = "X";
const jogador_O = "O";
const combinacoes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

document.addEventListener("click", (event) => {
    if(event.target.matches(".celula")){
        jogar(event.target.id, jogador_X)
        setTimeout(() => bot(), 500);
    }
});

function bot () {
    const posicaoDisponivel = []
        for (index in celulas) {
            if(!isNaN(index)) {
                if(
                    !celulas[index].classList.contains("X") &&
                    !celulas[index].classList.contains("O")
                ){
                    posicaoDisponivel.push(index);
                }
            }
        }
        const posicaoAleatoria = Math.floor(
            Math.random() * posicaoDisponivel.length
        );
        if(!fimJogo){
        jogar(posicaoDisponivel[posicaoAleatoria], jogador_O)
    }
    }

function jogar(id, turno){
    const celula = document.getElementById(id)
//    turno = checarTurno ? jogador_X : jogador_O; //single player
    celula.textContent = turno;
    celula.classList.add(turno);
    checarVencedor(turno);
}

function checarVencedor(turno) {
    const vencedor = combinacoes.some((comb) =>{
        return comb.every((index) =>{
            return celulas[index].classList.contains(turno);
        })
    })
    if (vencedor){
        encerrarJogo(turno);
    }else if (checarEmpate()){
        encerrarJogo();
    }// else {
    //     checarTurno = !checarTurno;
    // }
}
function checarEmpate(){
    let x = 0;
    let o = 0;
    for (index in celulas) {
        if(!isNaN(index)){
        if(celulas[index].classList.contains(jogador_X)){
            x++;
        }
        if (celulas[index].classList.contains(jogador_O)){
            o++;
        }
    }
    }
    return x + o === 9  ? true : false;
}
function encerrarJogo(vencedor = null) {
    fimJogo = true;
    const telaEscura = document.getElementById("tela");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3")
    let mensagem = null;

    telaEscura.style.display = "block";
    telaEscura.appendChild(h2);
    telaEscura.appendChild(h3);
    if (vencedor) {
        h2.innerHTML = `O jogador ${vencedor} venceu`
        console.log(vencedor)
    } else {
        h3.innerHTML = "Empatou";
        console.log('empatou')
    }
    let contador = 2;
    setInterval(() =>{
    h3.innerHTML = `Reiniciando em ${contador --}`;
    }, 1000);
    setTimeout(()=> location.reload(), 3000)
}