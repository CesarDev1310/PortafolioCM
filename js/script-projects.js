$(document).ready(function(){
    console.log("Pagina lista para usar");
    procesarProyecto();
});


let listaProyectos = [
    {
        idProy : 1,
        titulo : "Mi primer Proyecto",
        descripcion : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fechaCreacion : "01-04-2025",
        imagen: "",
        etiquetas : ["Ecología", "Fauna", "Lagos"]
    },
    {
        idProy : 2,
        titulo : "Mi segundo Proyecto",
        descripcion : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fechaCreacion : "01-01-2025",
        imagen: "",
        etiquetas : ["Software", "Sistemas"]
    },
    {
        idProy : 3,
        titulo : "Mi tercer Proyecto",
        descripcion : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fechaCreacion : "01-01-2024",
        imagen: "",
        etiquetas : ["Transporte", "Comunicaciones", "Aduanas"]
    },
    {
        idProy : 4,
        titulo : "Mi cuarto Proyecto",
        descripcion : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fechaCreacion : "01-05-2024",
        imagen: "",
        etiquetas : ["Energia", "Electricidad", "Voltaje"]
    }
];

function procesarProyecto(){

    debugger

    //Limpiar el contenedor
    $("#idContenedor").empty()

    //Reccoriendo el arreglo de proyectos
    //listaProyectos.forEach(p => {
     for(let p=0; p<listaProyectos.length; p++){
        //Agregar Tarjeta de Proyecto
        $("#idContenedor").append(
        '<div class="card mb-3 mr-mod idInputc" style="max-width: 540px;">'+
            '<div class="row g-0">'+
                '<div class="col-md-4">'+
                    '<img src="..." class="img-fluid rounded-start" alt="...">'+
                '</div>'+
                '<div class="col-md-8">'+
                    '<div class="card-body">'+
                        '<h5 class="card-title">'+listaProyectos[i].titulo+'</h5>'+
                        '<p class="card-text">This is a wider card with supporting text below as a natural lead-in to'+
                            'additional content. This content is a little bit longer.</p>'+
                        '<p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>');
    };

}