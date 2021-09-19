class Recetario{
    constructor(){
        this.inventario=[];
    }

    cargaRecetas(recetas){
        this.inventario = recetas.map(
            (value)=> new Receta(value.nombre, value.categoria, value.tiempo, value.dificultad, value.favoritos, value.porciones, value.precio, value.estrellas)
        );
    }

    busquedaAbierta(){
        // inventariothis.cargaRecetas(recetas);
        // let busquedaValor = document.querySelector('#inputBuscador').value.toLowerCase();
        // let btnBuscador = document.querySelector('#btnBuscador')
        // console.log(busquedaValor);
        // // this.inventario = this.inventario.filter(receta =>{
        // //     return console.log(this.inventario.values(busqueda));
        // // });
    }

    busquedaCategoria(){

    }


}
