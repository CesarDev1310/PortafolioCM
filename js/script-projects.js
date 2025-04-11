// comentario de linea

/*
comentarios
en 
bloque
 */

//Declarciones de variables

    // "="" el igual es de asignación
    //3 tipos
    const nombreVariable = "Este texto";
    let nombreVariableLet = "Este texto"; //Dentro de un contexto
    var nombreVariableVar = "Este texto"; //Universal

    let hola = 465465465;
    let valorBoolean = true;
    var nombrePagina = "Nombre del Alumno";

    //Objetos

    let perrito = {
        nombre : "Perrito",
        edad : 2,
        color : "Blanco"
    };

    let alumno = {
        nombre : "Edy",
        edad : 23
    };

    let alumno_2 = {
        nombre : "Edy",
        edad : 23,
        mascota: perrito,
        diasFavoritos: ["Vienes", "Sabado"]
    }


    //Arreglos o arrays

    let arreglo = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    let arreglo_2 = [1,2,3,4,5];
    let arreglo_3 = ["Lunes", 23];
    let arreglo_4 = [perrito, alumno];
    let arreglo_5 = ["lunes", 23, perrito, arreglo_2];


// estructuras JS

//Esto es un pequeño cambio

//Condicionales
if(true){
    console.log(nombrePagina)
}
