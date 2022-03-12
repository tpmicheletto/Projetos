var s = window.document.getElementById('sol')
    s.addEventListener('mousedown', clicar)
   //s.addEventListener('mouseup', volta)
    s.addEventListener('mouseenter', entrou)
    s.addEventListener('mouseout', saiu)

function entrou(){
    s.innerHTML ='🌧🌧🌧'
    s.style.backgroundColor ='gray'
}
function clicar(){
    s.innerHTML = '⛈⛈⛈'
    s.style.backgroundColor ='yellow'
    document.getElementById('sol').style.fontSize = '10em'
    document.getElementById('sol').style.width = '600px';
    setTimeout(()=>{
        volta()
    }, 400);
}
function volta(){
    s.innerHTML ='🌧🌧🌧'
    s.style.backgroundColor ='gray'
    document.getElementById('sol').style.fontSize = '7em'
    document.getElementById('sol').style.width = '450px';
}
function saiu(){
    s.innerHTML = '☁☁☁'
    s.style.backgroundColor ='white'
}