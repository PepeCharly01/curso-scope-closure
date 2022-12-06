// Variables
var a; // declarando
var b = 'b'; // declarando y asignamos
b = 'bb'; // reasignacion
var a = 'aa'; //redeclaracion

// Global scope
var fruta = 'manzana'; // global
console.log(fruta);

function frutaFavorita() {
    console.log(fruta);
}
frutaFavorita();

function paises () {
    pais = 'Mexico'; // Global
    console.log(pais);
}
paises();
console.log(pais);