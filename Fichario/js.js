const botao = document.querySelector('#enviar');
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const erroMsg = document.querySelector('.mensagem')

botao.addEventListener("click", function(e){
    e.preventDefault();

    const nomeValue =nome.value;
    const emailValue = email.value;

    if (nomeValue === "" || emailValue ===""){
        erroMsg.innerHTML = 'Por favor preencha todos os campos.'
    }
});
