// función que pueda recibir cualquier array como parámetro e 
//imprima su primer elemento.

var lista = ["Fortnite", "Mario Bros", "Pac-man"];

function recibir(elemento) {
    console.log(`El primer elemento es: ${lista[0]}`);
}
recibir();

// función que pueda recibir cualquier array como parámetro
// e imprima todos sus elementos uno por uno

var lista = ["Fortnite", "Mario Bros", "Pac-man"];

function listajuegos(juego){
    console.log(juego);
}
for(var i = 0; i < lista.length; i++) {
    listajuegos(lista[i]);
};