const slider = document.querySelector('#slider');
let sliderFicha = document.querySelectorAll('.sliderFicha');
let sliderFichaLast = sliderFicha[sliderFicha.length-1];

const btnIzquiera = document.querySelector('#btnIzquierda');
const btnDerecha = document.querySelector('#btnDerecha');

slider.insertAdjacentElement('afterbegin',sliderFichaLast);


function Next(){
    let sliderFichaFist = document.querySelectorAll('.sliderFicha')[0];
    slider.style.marginLeft = "-50%";
    slider.style.transition = "all 0.5s";
    setTimeout(()=>{
        slider.style.transition= "none";
        slider.insertAdjacentElement('beforeend', sliderFichaFist);
        slider.style.marginLeft="-25%";
    }, 500);
}

function Before(){
    let sliderFicha = document.querySelectorAll('.sliderFicha');
    let sliderFichaLast = sliderFicha[sliderFicha.length-1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(()=>{
        slider.style.transition= "none";
        slider.insertAdjacentElement('afterbegin', sliderFichaLast);
        slider.style.marginLeft="-25%";
    }, 500);
}

btnDerecha.addEventListener('click', ()=>{
    Next();
});

btnIzquiera.addEventListener('click', ()=>{
    Before();
});