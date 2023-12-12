// Ventana modal
let modal = document.getElementById('ventanaModal');   

// Botón que abre el modal
let botonSobreMi = document.getElementById('sobreMi'); 
let botonDatosAcademicos = document.getElementById('datosAcademicos'); 
let botonExperiencias = document.getElementById('experiencias');
let botonContacto = document.getElementById('contacto');

// Hace referencia al elemento <span> que tiene la X que cierra la ventana
let span = document.getElementsByClassName("cerrar")[0];

//Crear texto de cada apartado del menu
let textoSobreMi = "Desarrolladora de software, administradora de bases de datos y administrativa profesional con experiencia en administración, documentación (IVA, IRPF, SS, pedidos, presupuestos, facturas, contabilidad, etc.) y atención al cliente.";
let textoDatosAcademicos = "Secretaria/RecepciónSecretaria/Recepción Clínica de Estética · Jornada parcial";
let textoExperiencias = "Atención telefónica de pacientes. Gestionar agenda (citas). Recepción en consulta. Información sobre protocolo de cirugía. Facturación.";
let textoContacto = "Bárbara Martín Brown 605398805";
// Si escribo yo el texto no funciona el estilo 
//let textoSobreMi = "ajajjbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbajajajjaj";

let contenidoModal = document.getElementById("contenido-modal");
let paragraph = document.createElement("p");
//paragraph.style.textAlign = "left";  //Se puede hacer en el archivo css

// Cuando el usuario hace click en el botón, se abre la ventana
botonSobreMi.addEventListener("click",function() {
    //document.getElementById('contenido-modal').innerHTML = "<p>" + textoSobreMi + "</p>";
    //document.getElementById('contenido-modal').innerHTML = "<p>Desarrolladora de software, administradora de bases de datos y administrativa profesional con experiencia en administración, documentación (IVA, IRPF, SS, pedidos, presupuestos, facturas, contabilidad, etc.) y atención al cliente.</p>";
    paragraph.textContent = textoSobreMi;
    contenidoModal.append(paragraph);
    modal.style.display = "block";
});

botonDatosAcademicos.addEventListener("click",function() {
    //document.getElementById('contenido-modal').innerHTML = "<p>Secretaria/RecepciónSecretaria/Recepción Clínica de Estética · Jornada parcialClínica de Estética · Jornada parcial abr. 2018 - jul. 2023 · 5 años 4 mesesabr. 2018 - jul. 2023 · 5 años 4 meses Atención telefónica de pacientesBddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb </p>";
    paragraph.textContent = textoDatosAcademicos;
    contenidoModal.append(paragraph);
    modal.style.display = "block";
});

botonExperiencias.addEventListener('click', function(e) {
   // document.getElementById('contenido-modal').innerHTML = "<p>Parte3</p>";
    paragraph.textContent = textoExperiencias;
    contenidoModal.append(paragraph); 
    modal.style.display = "block";
});

botonContacto.addEventListener('click', function(e) {
    //document.getElementById('contenido-modal').innerHTML = "<p>Parte4</p>";
    paragraph.textContent = textoContacto;
    contenidoModal.append(paragraph); 
    modal.style.display = "block";
});


// Si el usuario hace click en la x, la ventana se cierra
span.addEventListener("click",function() {
    modal.style.display = "none";
});
  
// Si el usuario hace click fuera de la ventana, se cierra.
window.addEventListener("click",function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
});


// Crear un elemento <p> para cada apartado del menu
            //let parrafo = document.createElement("p");
            // Creo el texto de cada menu
            //let textoSobreMi = document.createTextNode("ajajjajajajjaj");
            //let textoDatosAcademicos = document.createTextNode("dddddddd");
            //let textoFinal = parrafo.appendChild(textoSobreMi);
            //parrafo.appendChild(textoSobreMi);
            //document.getElementById('contenido-modal').innerHTML = "<p>Texto aquí</p>";


