function empezar(){
    // Coger los nombres de los jugadores
    let jugador1 = document.getElementById("j1").value;
    let jugador2 = document.getElementById("j2").value;
    

    // Transforma el nombre de usuario
    jugador1 = transformar_nombre_jugador(jugador1);
    jugador2 = transformar_nombre_jugador(jugador2);


    // Validar nombre de jugadores -> devuelve boolean
    if (validacionJugadores(jugador1, jugador2)) {
       // SI es correcto
            // Mostrar nombre de los jugadores en la pantalla 
        document.getElementById("nombre_jugador1").innerHTML = jugador1;
        document.getElementById("nombre_jugador2").innerHTML = jugador2;
            // Ocultar el formulario
        document.getElementById("pantallaInicio").style.display = "none";
        //document.getElementById("pantallaInicio").style.display = "block";

        



    }

        
            
            // Mostramos el tablero
                //  // Cuando le de a un boton:
                //  // - Escribir el caracter 0 o X en funcion del jugador en el boton
            //  // - Comprobar si se ha terminado la partida
            //  // -    - Ha terminado cuando todos los botones tienen texto (no están vacio)
            //  // -    - cuando la combinacion sea de 3 en raya
            // // // si ha terminado:
            // // // mostrar un mensaje indicando quien ha ganado o si ha habido empate
            // // // si NO ha terminado:
            // // // le toca el siguiente jugador
        // NO es correcto
            // No hacemos nada?
}

function transformar_nombre_jugador(nombre_jugador){
    // strim() Función para quitar los espacios delante y detrás del nombre usuario 
    // Transforma el nombre usuario "   a   " por "a"
    return nombre_jugador.trim();
}

function validacionJugadores(jugador1, jugador2){
    /*
     1.- Si el nombre del jugador 1 esta vacio -> no es válido
     2.- Si el nombre del jugador 2 esta vacio -> no es válido
     3.- Si los nombres de los jugadores son el mismo -> no es válido
     4.- En otro caso -> es válido

     En los casos que no sea válido, la función noftificará al usuario mediante un alert el mensaje de error
     la función devolverá un tipo boolean que indicará si es válido o no
    */
    let jugadorValidado = true;

    if(jugador1.trim() == ""){
        mostrarMensaje("Debes introducir un nombre JUGADOR/A 1");
        jugadorValidado = false;

    }else if(jugador2.trim() == ""){
        
            mostrarMensaje("Debe introducir un nombre JUGADOR/A 2");
            jugadorValidado = false;
    
        }else if (jugador1 == jugador2){
            mostrarMensaje("Los nombres están repetidos");
            jugadorValidado = false;

            }else{
                jugadorValidado = true;
            }
    return jugadorValidado;
}

function mostrarMensaje(mensaje){
    /*
    mostrar un mensaje al usuario


    */
    console.log(mensaje);

}



//module.exports = {validacionJugadores, transformar_nombre_jugador};















/*
function jugadores(jugador1, jugador2){
    let jugado1 = document.getElementById("j1").value;
    let jugado2 = document.getElementById("j2").value;
    console.log(jugador1);
}



function quienEmpezaPartida(){
    if(jugador1 != "" && jugador2 != ""){
        // document.write("Jugador 1: ", jugador1, "<br>", "Jugador 2: ", jugador2, "<br>");
         //QUE JUGADOR EMPIEZA LA PARTIDA
         let jugadores = [jugador1, jugador2];
         let randJugadores = Math.floor(Math.random()*jugadores.length);
         let rValueJugadores = jugadores[randJugadores];
         document.write(rValueJugadores);
         console.log(rValueJugadores);

    }
}

function asignarFichaJugador(){
     //QUE FICHA LE TOCA A CADA JUAGADOR "O" o "X"
     let fichas = ["O", "X"];
     let randFichas = Math.floor(Math.random()*fichas.length);
     let rValueFichas = fichas[randFichas];
    document.write(rValueFichas);
    console.log(rValueFichas);
}


/*
function obtenerValor(){

    let jugador1 = document.getElementById("j1").value;
    let jugador2 = document.getElementById("j2").value;

    if(jugador1 != "" && jugador2 != ""){
       // document.write("Jugador 1: ", jugador1, "<br>", "Jugador 2: ", jugador2, "<br>");
        //QUE JUGADOR EMPIEZA LA PARTIDA
        let jugadores = [jugador1, jugador2];
        let randJugadores = Math.floor(Math.random()*jugadores.length);
        let rValueJugadores = jugadores[randJugadores];
       // document.write(rValueJugadores);
        
        //QUE FICHA LE TOCA A CADA JUAGADOR "O" o "X"
        let fichas = ["O", "X"];
        let randFichas = Math.floor(Math.random()*fichas.length);
        let rValueFichas = fichas[randFichas];
       // document.write(rValueFichas);
       console.log(rValueFichas);

        //document.write("Empieza Jugador/a: ", rValueJugadores, " Con la ficha: ", rValueFichas);
    }else{
        
        if(jugador1 == ""){
            alert("Debes introducir un nombre JUGADOR/A 1");

        }else{
            if(jugador2 == ""){
                alert("Debe introducir un nombre JUGADOR/A 2");
            }
        }
        //SIN ALERT
        //document.write("Debe introducir un nombre ")
    }

}
document.getElementById('divTabla').innerHTML = "<table><tr>   <th>Fila1Columna 1</th>  <th>Columna2</th> <th>Columna3</th>  </tr> <tr>   <th>Fila2Columna 1</th>  <th>Columna2</th> <th>Columna3</th>  </tr> <tr>   <th>Fila3Columna 1</th>  <th>Columna2</th> <th>Columna3</th>  </tr></table>";

*/
    


