
const pantalla = document.getElementById("pantalla");
const botones = document.getElementsByClassName("btn");
let ultimoBotonEsIgual = false;

function PuedoPonerUnPunto(cadena){
    let puedo = false;
    
    for (let i=cadena.length-1; i>=0; i--) {
        //console.log(cadena[i])
        if(cadena[i] == "+" || cadena[i] == "-" || cadena[i] == "*" || cadena[i] =="/"){
            puedo = true;
            break;
        }else{
                if(cadena[i] == "."){
                    puedo = false;
                    break;
                }else{
                    puedo = true;
                }
            }
    }
    return puedo;
}

//[...botones].forEach(element, index, array) =>{
//element hace referencia a boton 

[...botones].forEach((element) => {
    element.addEventListener ("click", () => {
        const botonApretado = element.textContent; 
        
        if(element.id === "c"){
            ultimoBotonEsIgual = false;
            pantalla.textContent = "0";
            return; //return para que termine la funcion
                    // y que no se ejecute el siguiente if
        }

        if(element.id === "borrar"){
            if (ultimoBotonEsIgual){                
                return;
            }
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
                pantalla.textContent = "0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

       if(element.id === "punto"){
            if (ultimoBotonEsIgual){
                ultimoBotonEsIgual = false;
                pantalla.textContent = "0.";
            return;
        }   
            if(PuedoPonerUnPunto(pantalla.textContent)){
                console.log("conc");
                pantalla.textContent += botonApretado;
            }else{
                console.log("sigo");

            }
            return;
        }
               
        if(element.id === "division" || element.id === "sumar" || element.id === "restar" || element.id === "multiplicar"){

            if(pantalla.textContent.slice(-1) === "/" || pantalla.textContent.slice(-1) === "+" || pantalla.textContent.slice(-1) === "-" || pantalla.textContent.slice(-1) === "*"){
               pantalla.textContent = pantalla.textContent.slice(0, -1);

            }else{
                //console.log("concatena")
            }
            pantalla.textContent += botonApretado;
            ultimoBotonEsIgual = false;
            return;
        }
      
        if(element.id === "igual"){
            ultimoBotonEsIgual = true;
            try{
                pantalla.textContent = eval(pantalla.textContent);
                console.log("a", pantalla.textContent);
            }catch{
                pantalla.textContent =  "0";
                console.log("b", pantalla.textContent);
            }
            return;
        }  

        if(pantalla.textContent === "0" || pantalla.textContent === "Error"){
            pantalla.textContent = botonApretado;
            console.log("aquibotonparetado");
        } else{
            if(ultimoBotonEsIgual){
                pantalla.textContent = botonApretado;
            }else{
            pantalla.textContent += botonApretado;
            }

           // console.log("concatenado con botonparetado");

        }
        ultimoBotonEsIgual = false;
    })
    
});



/*  TESTING DE LA FUNCION
console.log(PuedoPonerUnPunto('1') == true);
console.log(PuedoPonerUnPunto('12') == true);
console.log(PuedoPonerUnPunto('1,') == false);
console.log(PuedoPonerUnPunto('1,2') == false);
console.log(PuedoPonerUnPunto('1,3+3,3') == false);
console.log(PuedoPonerUnPunto('13+3,3') == false);
console.log(PuedoPonerUnPunto('1,3+3,') == false);
console.log(PuedoPonerUnPunto('1,3*3') == true);
console.log(PuedoPonerUnPunto('1,3*3/') == true);
console.log(PuedoPonerUnPunto('1,3*3/,') == false);
console.log(PuedoPonerUnPunto('1,3*3/,0') == false);
console.log(PuedoPonerUnPunto('1,3*3/,01') == false);
console.log(PuedoPonerUnPunto('1,3*3/,01-9') == true);
console.log(PuedoPonerUnPunto('1,3*3/,01-9+') == true);
*/


/*
querySelector te permite selecionar elementos del DOM 
mediante a queries, es decir, 
si usas . seleccionas por clase, 
si usas # por id, 
si usas [] por nombre de atributos, 
y así sucesivamente, 
puedes buscar los diferentes selectores disponibles 
pero es el equivalente al $ de jQuery.
*/
/*
La propiedad textContent de la interfaz Node 
representa el contenido de texto de un nodo y sus 
dencendientes.
*/
//const pantalla=document.querySelector(".pantalla");
//const botones=document.querySelector(".btn");