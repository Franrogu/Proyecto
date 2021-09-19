let recetario = new Recetario();
recetario.cargaRecetas(recetas);
let recetasInventario = recetario.inventario;
console.log(recetasInventario);

// let busquedaSeccion = document.querySelector('#homeCategorias').querySelectorAll('p');
// let selecionarSeccion = document.querySelector('#homeCategorias').querySelectorAll('img');
// let arr = [...busquedaSeccion];

let homeCategoria = document.querySelector('#homeCategorias') ;
let seccionFiltrado = document.querySelector('#seccionFiltrado');
function crearCard(dirImg){
    let fichaReceta = document.createElement(`div`);
    fichaReceta.classList.add('receta-ficha')
    let figureReceta = document.createElement(`figure`);
    figureReceta.classList.add('${imgreceta-ficha}')
    let imgReceta = document.createElement(`img`);
    imgReceta.classList.add('img-receta')
    imgReceta.src = `./${dirImg}`;
    let hoverReceta= document.createElement('div');
    hoverReceta.classList.add('')
    let hoverDificultad= document.createElement('div');
    let hoverTiempo= document.createElement('div');
    let hoverPrecio= document.createElement('div');
    
}
// let fichaReceta = document.createElement(`
//         <div class="receta-ficha">
//         <figure class="imgreceta-ficha">
//             <a href="./receta.html"><img src="./src/img/receta.jpg" alt="" class="img-receta"></a>

//             <div class="hoverreceta">
//                 <div class="hovertiempo">
//                     <img class="imgrecetamultimedia" src="./src/img/reloj.png" alt="Tiempo">
//                     75 mins
//                 </div>
//                 <div class="hoverdificultad">
//                     <img src="./src/img/dificultad.png" alt="Dificultad" class="imgrecetamultimedia">
//                     Facil
//                 </div>
//                 <div class="hoverprecio">
//                     <img src="./src/img/precio.png" alt="Precio" class="imgrecetamultimedia">
//                     Economico

//                 </div>
//             </div>
//         </figure>
//         </div>
// `);


homeCategorias.addEventListener('click',(categoria)=>{
    if(categoria.target.matches('.rapida') ) {
        let rapida = recetasInventario.filter((receta) => receta.categoria.toLowerCase().includes('rapida'))
        console.log(rapida);
        
    } else if (categoria.target.matches('.facil')) {    
        let facil = recetasInventario.filter((receta) => receta.categoria.toLowerCase().includes('facil'))
        console.log(facil);
    }else if (categoria.target.matches('.desayuno')) {    
        let desayuno = recetasInventario.filter((receta) => receta.categoria.toLowerCase().includes('desayuno'))
        console.log(desayuno);
    }else if (categoria.target.matches('.comida')) {    
        let comida = recetasInventario.filter((receta) => receta.categoria.toLowerCase().includes('comida'))
        console.log(comida);
    } else if (categoria.target.matches('.cena')) {    
        let cena = recetasInventario.filter((receta) => receta.categoria.toLowerCase().includes('cena'))
        console.log(cena);
    }

})




  