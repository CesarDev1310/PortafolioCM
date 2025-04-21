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
        responsable: "Alumno Certus",
        equipo:["Persona 1", "Persona 2", "Persona 3", "Persona 4"],
        presupuesto:1321321,
        imagen: "https://img.freepik.com/foto-gratis/montanas-vestrahorn-stokksnes-islandia_335224-667.jpg?semt=ais_hybrid&w=740",
        etiquetas : ["Ecología", "Fauna", "Lagos"]
    },
    {
        idProy : 2,
        titulo : "Mi segundo Proyecto",
        descripcion : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fechaCreacion : "01-01-2025",
        imagen: "https://img.freepik.com/foto-gratis/montanas-vestrahorn-stokksnes-islandia_335224-667.jpg?semt=ais_hybrid&w=740",
        etiquetas : ["Software", "Sistemas"]
    },
    {
        idProy : 3,
        titulo : "Mi tercer Proyecto",
        descripcion : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fechaCreacion : "01-01-2024",
        imagen: "https://media.istockphoto.com/id/1403846937/es/foto/imaginaci%C3%B3n-inspiraci%C3%B3n-ideas-innovaci%C3%B3n-creatividad-motivaci%C3%B3n-tecnolog%C3%ADa.jpg?s=612x612&w=0&k=20&c=FAXED52JpNLjNf9FvWSJmZaXXN61oMK4uYzxMqKxV74=",
        etiquetas : ["Transporte", "Comunicaciones", "Aduanas"]
    },
    {
        idProy : 4,
        titulo : "Mi cuarto Proyecto",
        descripcion : "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        fechaCreacion : "01-05-2024",
        imagen: "https://wallpapers.com/images/featured/imagenes-de-minions-qhq2hsgjf7kh8a2h.jpg",
        etiquetas : ["Energia", "Electricidad", "Voltaje"]
    }
];

function procesarProyecto(){
    debugger
    //Limpiar el contenedor
    $("#idContenedor").empty();
    
    //Reccoriendo el arreglo de proyectos
    listaProyectos.forEach(p => {
        $("#idContenedor").append(
        '<div class="card mb-3 mr-mod idInputc" style="max-width: 540px;">'+
            '<div class="row g-0">'+
                '<div class="col-md-4">'+
                    '<img src="'+p.imagen+'" class="img-fluid rounded-start" alt="'+p.titulo+'">'+
                '</div>'+
                '<div class="col-md-8">'+
                    '<div class="card-body">'+
                        '<h5 class="card-title">'+p.titulo+'</h5>'+
                        '<p class="card-text">'+p.descripcion+'</p>'+
                        '<p class="card-text"><small class="text-body-secondary">'+p.fechaCreacion+'</small></p>'+
                    '</div>'+
                '</div>'+
            '</div>'+
        '</div>');
    });
    /*
    for(let p=0; p<listaProyectos.length; p++){
        //Agregar Tarjeta de Proyecto
        $("#idContenedor").append();
    };*/

}