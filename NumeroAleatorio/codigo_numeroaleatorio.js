

function numeroAleatorio(){

    let aleatorio = Math.random()*100;
    aleatorio = Math.floor(aleatorio);
    document.getElementById('resultadoNumeroAleatorio').innerHTML = aleatorio;
}
