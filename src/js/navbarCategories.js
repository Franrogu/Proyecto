// // let html = document.querySelector('body')[0];
// let categoriasNavbar = document.querySelector('#categoriasNavbar');
// let busquedaForm = document.querySelector('#busquedaForm');

// let categorias = document.querySelectorAll('.categorias');


// function mostrarScroll(){
//     let scrollTop = document.documentElement.scrollTop;
//     for (let i = 0; i < categorias.length; i++) {
//         let alturaAnimado = categorias[i].offsetTop;

//         if (alturaAnimado < scrollTop) {
//             busquedaForm.style.visibility = 'hidden';
//             categoriasNavbar.style.visibility = 'visible';
//     }
//     }
    
// }

// window.addEventListener('scroll', mostrarScroll);



// let ubicacionPrincipal = window.pageYOffset;
// window.onscroll = function(){
//     let desplazamientoActual = window.pageYOffset;
//     if (ubicacionPrincipal >=desplazamiento) {
//         document.querySelector("#catNavbar").style.visibility ='visible';
//     }else{
//         document.querySelector("#catNavbar").style.visibility = 'hidden';
//     }

//     ubicacionPrincipal= desplazamientoActual;
// }


window.addEventListener('scroll',()=>{
    // let nav = document.querySelector('.catNavbar');
    let idBuscador = document.querySelector('#busquedaForm');
    let idCategorias = document.querySelector('#catNavbar');
    let windowPositionCat = window.scrollY <664;
    let windowPositionBus = window.scrollY >=664;
    idBuscador.classList.toggle('buscadorFormHidden', windowPositionBus);
    idCategorias.classList.toggle('catNavbarHidden',windowPositionCat);
})

