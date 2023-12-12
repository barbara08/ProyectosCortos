let botonSobreMi = document.getElementById('sobreMii'); 
let botonDatosAcademicos = document.getElementById('datosAcademicos'); 
let botonExperiencias = document.getElementById('experiencias');
let botonContacto = document.getElementById('contacto');


//let textoSobreMi = document.createTextNode("ajajjajajajjaj");
let textoSobreMi = "ajajjajajajjaj";
let textoDatosAcademicos = document.createTextNode("dddddddd");
let textoExperiencias = document.createTextNode("   jjjjjjj");
let textoContact = document.createTextNode("fff");



botonSobreMi.addEventListener("click",function() {
let paragraph = document.createElement("p");
paragraph.textContent = textoSobreMi;
document.write(paragraph);
    //alert(textoSobreMii);

});
