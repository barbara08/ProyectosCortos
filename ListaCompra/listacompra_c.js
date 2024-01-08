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

// 5 Genero tabla dinámica con los valores por defecto de products_to_buy
function default_products_to_buy(){
    products_to_buy.forEach(function(default_value) {
        add_row("table_products_to_buy", default_value);
    });
    /* //Añadimos la función add_row() se eliminarán el siguiente código
    
    //Seleccionamos el id de las tablas ya creadas table y tbody (estos son fijos)
    let table = document.getElementById("table_products_to_buy");
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
        //Añadir celda a la fila
        tr.appendChild(cell_amount); 
        tr.appendChild(cell_product); 
        //Añadir fila al elemento table
        table.appendChild(tr);  
    });*/

}
default_products_to_buy();

function default_products_purchased() {
    products_purchased.forEach(function (default_value) {
        add_row("table_products_purchased", default_value);
    });

    /* //AÑADIMOS LA FUNCION add_row() y se elimina el siguiente código
    let table = document.getElementById("table_products_purchased");
    products_purchased.forEach(function (product) {
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
        //Añadir celda a la fila
        tr.appendChild(cell_amount); 
        tr.appendChild(cell_product); 
        //Añadir fila al elemento table
        table.appendChild(tr);  

    });*/
}
default_products_purchased();

generate_unique_id = () => {
    return Math.random().toString(30).substring(2);
}
//8 Validación de formulario

function validate(){
    /*
    Los campos de producto y cantidad son obligatorios
    El producto no puede ser un número
    La cantidad debe ser un número

    1.- cogemos los valores del formulario
    2.- mirar si el producto viene relleno
    3.- mirar si el producto no es un numero
    4.- mirar si la cantidad viene relleno
    5.- mirar si la cantidad es un numero
    
    6.- si se cumple lo anterior entonces return true

    */
   // 1
   let product_value = document.getElementById("product_value").value;
   // 2
   if((product_value === "")){
    alert("producto vacio");
    return false;
   }    
   // 3
   let product_as_number = Number.parseInt(product_value);
   if (!Number.isNaN(product_as_number) ){
    alert("no es un producto");
    return false;
   }
   // 4
   let amount_value = document.getElementById("amount_value").value;
   if((amount_value === "")){
    alert("cantidad vacia");
    return false;
   }    
   // 5
   let amount_as_number = Number.parseInt(amount_value);
   if (Number.isNaN(amount_as_number) ){
    alert("no es un numero");
    return false;
   }
   // 6
   return true;
}

function add(){
    //console.log(validate());
    if(validate()){
        //Coger los valores de los inputs
        let product_value = document.getElementById("product_value").value;
        let amount_value = document.getElementById("amount_value").value;
        let amount_value_number = Number.parseInt(amount_value);

        generate_unique_id();

        //Almacenar los valores en la estructura de la lista (se ha guardado en la variable)
        let value_inputs = {
            'id': generate_unique_id(),
            'cantidad': amount_value_number,
            'producto': product_value
        };
        console.log(value_inputs);
        //Añadir los valores a la lista
        products_to_buy.push(value_inputs);

        add_row("table_products_to_buy", value_inputs);
        //add_row("table_products_purchased", value_inputs);
    } //fin if
}

    //Crear una función para generar la fila de la tabla y así mostrar los datos
    //Tenemos 2 tablas, crearemos una función para cuando creemos la fila se lo añada a la tabla correspondiente
    //pasaremos 2 parámetros (id de la table y el valor de los inputs que lo llamaremos value_inputs)
function add_row(id_table, value_inputs){
    let table = document.getElementById(id_table);

    //Crear las filas tr
    let tr = document.createElement("tr");
    //Crear las celdas (td) 
    let cell_amount = document.createElement("td");
    let cell_product = document.createElement("td");
    let cell_button = document.createElement("td");
    //Crear el boton Delete
    let button = document.createElement("button");
    //Crear un texto (node)
    let textCell_amount = document.createTextNode(value_inputs.cantidad);
    let textCell_product = document.createTextNode(value_inputs.producto);
    //Crear texto (node) del button 
    let text_button = document.createTextNode("Delete");
    //Añadir texto a la celda
    cell_amount.appendChild(textCell_amount); 
    cell_product.appendChild(textCell_product); 
    // texto al boton
    button.appendChild(text_button); 
    // boton a la celda
    cell_button.appendChild(button); 

    /*
    tenemos que guardar el id del producto en algún sitio:
     x ejemplo:
      - boton que llame a una función con el valor del id del producto
      - guardar el id del producto como atributo id de la fila o celda para cuando hagamos click lo recuperemos (no hace falta un boton)
    */


    //Añadir celda a la fila
    tr.appendChild(cell_amount); 
    tr.appendChild(cell_product); 
    tr.appendChild(cell_button); 
    //Añadir fila al elemento table
    table.appendChild(tr);  
}

// 10 mover 1 elemento desde "a comprar" hacia "ya compradas"

    function move_buy_to_purchased(id, lista1, lista2){
        //Buscar Posición del producto seleccionado por su ID en la lista products_to_buy
        let posicion_en_la_lista = 0;
        posicion_en_la_lista = lista1.findIndex((element) => element.id == id);
        //Encuentra el elemento (producto)
        let item = 0;
        item = lista1.splice(posicion_en_la_lista, 1);
        //Añadir el elemento encontrado a la lista products_purchased
        lista2.push(item[0]);
        //Nos devuelve la lista de las dos listas
        return item[0];
        //return lista1, lista2;
       // add_row(lista2, item[0]);
    };

producto = move_buy_to_purchased(2, products_to_buy, products_purchased);
console.log(products_to_buy);
add_row('table_products_purchased', producto)
//del_row('table_products_to_buy', producto)


    // 0. Cuando haga click en producto o en cantidad (selecciona un ID)
    // 1. Buscar el producto (por su ID)
        //Busca el ID en la tabla product_to_buy (ver si está o no)
    // 2. Ver la posición en la que se encuentra
    // 3. Eliminar el producto por id de la tabla "products_to_by"
        // Actualizar la tabla "products_to_by"
    // 4. Añadir el producto por id a la tabla "products_purchased"
        // Actualizar la tabla "products_purchased"
    // 5. Imprimir el producto en pantalla  






/*
x1 Formulario 
x2 Tabla de productos por comprar
x3 Tabla de productos ya compradas
x4 Datos por defecto para cosas por comprar
x5 Mostrar los datos por defecto en su tabla (por comprar)
x6 Datos por defecto para cosas ya compradas
x7 Mostrar los datos por defecto en su tabla (ya compradas)
x8 añadir desde el formulario datos a la tabla por comprar
x9 hacer validación de los datos del formulario
10 mover 1 dato desde "a comprar" hacia "ya compradas"
11 mover 1 dato desde "ya compradas" hacia "a comprar"
12 ordernar la tabla "a comprar" por cantidad
13 ordernar la tabla "a comprar" por orden alfabetico asc
14 ordernar la tabla "a comprar" por orden alfabetico desc
15 aplicar los criterios de ordenación de la tabla "a comprar" en la tabla "ya compradas"
16 agregar función de borrado en la tabla "ya compradas"
17 editar la cantidad de la tabla "a comprar""
*/


//Otra forma de añadir productos a la lista (NO OPTIMIZADO)
function add_button(){
    //Coger los valores de los inputs Productos y Cantidad
    let product_value_to_buy = document.getElementById('product_value').value;
    let amount_value_to_buy = document.getElementById('amount_value').value;
    
    //Almacenar los valores en la estructura de la lista (se ha guardado en una variable)
    let struct = {
        'id': 50,
        'cantidad': amount_value_to_buy,
        'producto': product_value_to_buy
    };

    //Añadir a la lista products_to_buy
    products_to_buy.push(struct);

    //Mostrar en la tabla, para ello hay que crear las filas y celdas

    let table = document.getElementById("table_products_to_buy");

    //Crear las filas tr
    let tr = document.createElement("tr");
    //Crear una celda (td) 
    let cell_amount = document.createElement("td");
    let cell_product = document.createElement("td");
    //Crear un texto (node)
    let textCell_amount = document.createTextNode(struct.cantidad.toString() );
    let textCell_product = document.createTextNode(struct.producto.toString() );
    //Añadir texto a la celda
    cell_amount.appendChild(textCell_amount); 
    cell_product.appendChild(textCell_product); 
    //Añadir celda a la fila
    tr.appendChild(cell_amount); 
    tr.appendChild(cell_product); 
    //Añadir fila al elemento table
    table.appendChild(tr);  

    //console.log(struct);

}



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

