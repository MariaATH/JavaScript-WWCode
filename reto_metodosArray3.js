let numeros = new Array();


for (let numero = 1; numero < 31; numero++) {
    // usando método push()
    numeros.push(numero);
}
console.log("array completo: "+numeros);

// usando método filter()
let multiplos3 = numeros.filter(function(numero){
    if (numero % 3 == 0) {
        return numero;
    }
}) 
console.log("multiplos de 3: "+multiplos3);

let multiplos5 = numeros.filter(function(numero){
    if (numero % 5 == 0) {
        return numero;
    }
}) 
console.log("multiplos de 5: "+multiplos5);

let multiplicacion2 = numeros.map(function(numero){
    return numero*2;
}) 

console.log("multiplicacion por 2: "+multiplicacion2);

// Ejercicio de array 5: tipo de datos

let datos = ['abc'];
let igualTipo = datos.every(function(dato){
    return typeof datos[0] == typeof dato;
})

console.log("¿Tipos de datos iguales? "+ igualTipo);
