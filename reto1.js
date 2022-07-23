let estudiantes =  ["Ana", "Manuela", "Raúl", "Carolina", "María", "Antonio", "Cristina"];

let empiezanA = estudiantes.filter(function(nombre){
    if (nombre[0]== "A"){
        return nombre;
    }
});

let empiezanA2 = new Array();

estudiantes.forEach(nombre => {
    if (nombre[0]=='A') {

        empiezanA2.push(nombre);
        
    }
});


let mayores6 = new Array();
estudiantes.forEach(nombre => {
    if (nombre.length > 6) {

        mayores6.push(nombre);
        
    }
});



console.log(empiezanA,empiezanA2,mayores6);