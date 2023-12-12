const products_to_buy = [
    {
        'id': 1,
        'cantidad': 1,
        'producto': "leche semidesnatada"
    },
    {
        'id': 2,
        'cantidad': 1,
        'producto': "mantequilla"
    },
    {
        'id': 3,
        'cantidad': 1,
        'producto': "huevos"
    }   
]
const products_purchased = [
    {
        'id': 4,
        'cantidad': 1,
        'producto': "cereales"
    },
    {
        'id': 5,
        'cantidad': 3,
        'producto': "sal"
    },
    {
        'id': 6,
        'cantidad': 2,
        'producto': "garbazos"
    }   
];

/* COMPROBACION DE DATOS
 for(let i=0; i<products_to_buy.length; i++){
    console.log(products_to_buy[i]["cantidad"] + "cantidad");
    console.log(products_to_buy[i]["producto"] + "producto");
    //document.getElementById("celda1").innerHTML = products_to_buy[i]["producto"];
    let amount_products_to_buy = products_to_buy[i]["cantidad"];
    let product_products_to_buy = products_to_buy[i]["producto"];
    console.log(product_products_to_buy);
    console.log(amount_products_to_buy);
}
*/



// 5 Genero tabla dinámica con los valores por defecto de products_to_buy
function default_products_to_buy(){
    
    //Obtener la referencia (get)
    // let body = document.getElementsByTagName("body")[0];
    
    //Seleccionamos el id de las tablas ya creadas table y tbody (estos son fijos)
    let table = document.getElementById("table_products_to_buy");

  //  let tbody = document.getElementsByTagName("tbody");
    
    //Crear las etiquetas (create) tr y td (estos son dinámicos por lo que hay que hacer for)
    products_to_buy.forEach(function(product) {

        //Crear las filas tr
        let tr = document.createElement("tr");
        //Crear una celda (td) 
        let cell_amount = document.createElement("td");
        let cell_product = document.createElement("td");
        //Crear un texto (node)
        let textCell_amount = document.createTextNode( product.cantidad.toString() );
        let textCell_product = document.createTextNode( product.producto.toString() );
        //Añadir texto a la celda
        cell_amount.appendChild(textCell_amount); 
        cell_product.appendChild(textCell_product); 
        //Creo de nuevo el siguiente texto (node)
        // textCell = document.createTextNode( product.producto.toString() );
        //Y lo vuelvo a añadir el texto a la cenda
        cell_amount.appendChild(textCell_amount); 
        cell_product.appendChild(textCell_product); 
        //Añadir celda a la fila
        tr.appendChild(cell_amount); 
        tr.appendChild(cell_product); 
        //Añadir fila al elemento table
        table.appendChild(tr);
});
//Añadir elemento tbody a la tabla
//table.appendChild(tbody);
//Añadir la tabla al body
// body.appendChild(table); 
}



/*
x1 Formulario 
x2 Tabla de productos por comprar
x3 Tabla de productos ya compradas
x4 Datos por defecto para cosas por comprar
x5 Mostrar los datos por defecto en su tabla (por comprar)
6 Datos por defecto para cosas ya compradas
7 Mostrar los datos por defecto en su tabla (ya compradas)
8 añadir desde el formulario datos a la tabla por comprar
9 hacer validación de los datos del formulario
10 mover 1 dato desde "a comprar" hacia "ya compradas"
11 mover 1 dato desde "ya compradas" hacia "a comprar"
12 ordernar la tabla "a comprar" por cantidad
13 ordernar la tabla "a comprar" por orden alfabetico asc
14 ordernar la tabla "a comprar" por orden alfabetico desc
15 aplicar los criterios de ordenación de la tabla "a comprar" en la tabla "ya compradas"
16 agregar función de borrado en la tabla "ya compradas"
17 editar la cantidad de la tabla "a comprar""
*/









/*  NO SALE, NO HACE FALTA HACER OTRO FOR
    for(let i=0; i<products_to_buy.length; i++) {
        let amount_products_to_buy = products_to_buy[i]["cantidad"];
        let product_products_to_buy = products_to_buy[i]["producto"];
                console.log(amount_products_to_buy)
        //Crear las filas tr
        let tr = document.createElement("tr");
        
        //Por cada fila (tr) crear una celda (td) con sus datos (nodes)
            
         for(let j=0; j<products_to_buy.length; j++) {
            let cell = document.createElement("td");
            let textCell = document.createTextNode( amount_products_to_buy + i + j);

            //let textCell = document.createTexNode(amount_products_to_buy + product_products_to_buy);

            //Añadir cell y texCell
            cell.appendChild(textCell); 
            tr.appendChild(cell);
        }
    
        //Añadir la fila (tr) al final de la tabla (tbody)
        tbody.appendChild(tr);
    }

table.appendChild(tbody);
body.appendChild(table);   
*/


default_products_to_buy();