const nomeInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const botaoEnviar = document. querySelector("#enviar");
const msgErro = document.querySelector(".mensagem");

botaoEnviar.addEventListener("clink", (e)=>{
    e.preventDefault();
    const nomeValue = nomeInput.value;
    const emailValue = emailInput.value;

    if (nomeValue ===" "|| emailValue === " "){
        msgErro.txtContent = "Por favor preencha todos os campos!";
        msgErro.classList = "erro";
    }
})