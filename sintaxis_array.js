
const numeros = [1,2,3,4,7,40,61,75];
const pares = numeros.filter( function(numero) {
    if (numero %2 ==0) {
        return numero;
    }
});

console.log(pares);