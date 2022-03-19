const botao = document.querySelector('#enviar');
const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const erroMsg = document.querySelector('.mensagem')
const item = document.querySelector("#usuario")

botao.addEventListener("click", function(e){
    e.preventDefault();

    const nomeValue =nome.value;
    const emailValue = email.value;

    if (nomeValue === "" || emailValue ===""){
        erroMsg.innerHTML = 'Por favor preencha todos os campos.'
        erroMsg.classList = "erro"
        setTimeout(()=>{
            erroMsg.textContent = "";
            erroMsg.classList = "";
        }, 2500)
        return;
    }
    const lista = document.createElement("li");
    lista.classList = "item";
    lista.innerHTML = `Nome: ${nomeValue}<br/>E-mail: ${emailValue}`
    nome.value = ""
    email.value = ""
    item.appendChild(lista)
});
