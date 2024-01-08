  
  
  const products = [
    {
        'id': 1,
        'cantidad': 6,
        'producto': "leche semidesnatada"
    },
    {
        'id': 2,
        'cantidad': 1,
        'producto': "mantequilla"
    },
    {
        'id': 3,
        'cantidad': 12,
        'producto': "huevos"
    },
    {
        'id': 4,
        'cantidad': 2,
        'producto': "pan"
    }      
]

const lista1 = [
    {
        'id': 1,
        'cantidad': 6,
        'producto': "leche semidesnatada"
    },
    {
        'id': 2,
        'cantidad': 1,
        'producto': "mantequilla"
    },
    {
        'id': 3,
        'cantidad': 12,
        'producto': "huevos"
    },
    {
        'id': 4,
        'cantidad': 2,
        'producto': "pan"
    }      
]
  
const lista22 = []
const lista2 = [
    {
        'id': 5,
        'cantidad': 6,
        'producto': "leche semidesnatada"
    },
    {
        'id': 6,
        'cantidad': 1,
        'producto': "mantequilla"
    },
    {
        'id': 7,
        'cantidad': 12,
        'producto': "huevos"
    },
    {
        'id': 8,
        'cantidad': 2,
        'producto': "pan"
    }      
]
  /*
    un funcion que reciba un id, y una lista de objecto y retorne la posicion de la lista donde esta el objecto con el id dado
    */
   function X(id, lista){
    let posicion_en_la_lista = 0;
    posicion_en_la_lista = lista.findIndex((element) => element.id == id);
    return posicion_en_la_lista;
   }
   /*
   una funcion que recibe una posicion de la lista y una lista, retorne el item de esa posicion y la lista sin el elemento 
   ejç: func(1, [0,1,2,3] => 1, [0,2,3])
   */
  function Y(posicion, lista){
    let item = 0;
  // item = products.slice(posicion,posicion + 1);
    item = lista.splice(posicion, 1);
    return [item[0], lista];
  }
  /*
  funcion que recibe un objeto y una lista, añada el elmento en la lista y retorne la lista actualizada
  */
 function Z(item, lista){
    lista.push(item);
    return lista;
 }

  /*
  una funcion q reciba un id, una lista de objectos y unua lista final
  por medio del id busque en la lista de objtos y mueva el objeto de uno liasta haca la otra
  devuelva loas 2 listas actualizadas
  */
 function A(id, lista1, lista2) {
    let posicion = X(id, lista1);  // busca la poscion
    let [item, lista_actualizada] = Y(posicion, lista1); // saca el lelmento de la lista
    lista2 = Z(item, lista2); // añade el elmeneto en la lista
    
    return [lista_actualizada, lista2];
 }



 function B(id, lista1, lista2) {

    let posicion_en_la_lista = 0;
    posicion_en_la_lista = lista1.findIndex((element) => element.id == id);
    console.log("posicion" + posicion_en_la_lista);
    //return posicion_en_la_lista;

    let item = 0;
      item = lista1.splice(posicion_en_la_lista, 1);
      //return [item[0], lista];
      console.log("elem" , item);
      console.log(item);
      console.log("lista2", lista2);

      console.log("elemento" , item[0], lista1);
    
     lista2.push(item[0]);
     // return lista;
     console.log("lista_ac", lista2);

    //  return [lista_actualizada, lista2];
console.log("_________________");
    return [lista1, lista2];
 }
/*
    console.log( "tx----------");
        console.log( "tx" + X(3, products) );
        console.log( "tx" + X(2, products) );
        console.log( "tx" + X(1, products) );
        console.log( "tx" + X(4, products) );
        console.log( "tx" + X(5, products) ); //Si no se encuentra devuelve -1
    console.log( "tx-----end-----");

    console.log( "ty----------");
        [item, lista_actualizada] = Y(0, products);
        console.log(item);
        // console.log(lista_actualizada);
    console.log( "ty-----end-----");

    console.log( "tz----------");
        console.log(Z({ id: 15, cantidad: 2, producto: 'pan' }, products));
        console.log(Z({ id: 30, cantidad: 2, producto: 'pan' }, lista1));

    console.log( "tz-----end-----");

    console.log( "ta----------");
        console.log(A(3, lista1, lista2));
    console.log( "ta-----end-----");
*/


    console.log( "tb----------");
        console.log(B(8, lista1, lista2));
        console.log(B(1, lista1, lista2));

        console.log(B(2, lista1, lista2));

        console.log(B(200, lista1, lista2));

    console.log( "tb-----end-----");







/*
[1, 2,3] = 1, 2, 3 son elmentos o itmes de una lista
{
    'key': 'valor',
    'propiedad': 'valor',
}
[0, '1', 'adfas', [], {'p': 123}]

[] lista o array no asociativo
{} diccionario oo array asociativo o * objeto
(item, elmeneto) tupla ->  inmutable -> no se  puede modificar
*/