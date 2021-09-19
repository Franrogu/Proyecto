let recetario = new Recetario();
recetario.cargaRecetas(recetas);
let recetasList = recetario.inventario;

let recetaTiempo = document.querySelector('.recetatiempo');
let recetaDificultad = document.querySelector('.recetadificultad');
let recetaFavoritos = document.querySelector('.recetafavoritos');
let recetaPorciones = document.querySelector('.recetaporciones');
let recetaPrecio = document.querySelector('.recetaprecio');
let recetaEstrellas = document.querySelector('.recetaestrellas');

let receta = recetasList.sort((propiedad)=>{
    if (propiedad.nombre === 'PASTEL CON CANELA') { 
        recetaTiempo.textContent = propiedad.tiempo;
        recetaFavoritos.textContent = propiedad.favoritos;
        recetaDificultad.innerHTML= propiedad.dificultad;
        recetaPorciones.innerHTML = propiedad.porciones;
        recetaPrecio.innerHTML = propiedad.precio;
        recetaEstrellas.innerHTML=propiedad.estrellas
    }
})

console.log(recetario.inventario);
// let titulo = document.querySelector("#tituloReceta").innerHTML;




