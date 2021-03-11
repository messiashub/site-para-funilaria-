const nav = document.getElementById('nav1');
const toNav = nav.offsetTop;
console.log(nav.classList)


window.onscroll = () => {
    ficarNoTop();
}


function ficarNoTop() {
    if (window.pageYOffset >= toNav) {
        nav.classList.add("fixed-top")
    } else {
        nav.classList.remove("fixed-top")
    }
}

/* ANIMA SCROLL */
const elementos = document.querySelectorAll('[data-anima]');
console.log(elementos)
const animacaoClass = "animacao";

function animaScroll() {
    const topoPagina = window.pageYOffset + ((window.innerHeight * 3) / 4);
    elementos.forEach(function (elemento) {
        if (topoPagina > elemento.offsetTop) {
            elemento.classList.add(animacaoClass);
        } else {
            elemento.classList.remove(animacaoClass)
        }
    });
}
/* if(elementos.length){
    window.addEventListener('scroll',function(){
        animaScroll();
    })
} */
window.addEventListener('scroll', function () {
    animaScroll();
})


/* MODAL */

function cliqueModal(img) {
   /*  const janelaModal = document.getElementById('janelaModal');
    const imgModal = document.getElementById('imgModal');
    const txtModal = document.getElementById('txtModal');
    const btnFechar = document.getElementById('fechar'); */

    /*  janelaModal.classList.remove('escondeJanelaModal');
     janelaModal.classList.add('mostrarJanelaModal'); */
}

/* const janelaModal = document.getElementById('janelaModal'); */





const janelaModal = document.getElementById('janelaModal');
const mini = document.querySelectorAll('.mini');
let imgModal = document.getElementById('imgModal');
const btnFechar = document.getElementById('fechar');
const txtModal = document.getElementById('txtModal')
let srcImg=""
console.log(mini);
/* janelaModal.classList.remove('escondeJanelaModal');
janelaModal.classList.add('mostrarJanelaModal');
*/


for (let i = 0; i < mini.length; i++) {
    mini[i].addEventListener('click', function () {
        console.log('oi');
        srcImg = mini[i].getAttribute('src');
        imgModal.setAttribute("src",srcImg);
        txtModal.innerHTML=mini[i].alt;
        
        janelaModal.classList.remove('escondeJanelaModal'); 
       /*  janelaModal.classList.add('mostrarJanelaModal'); */
        
        janelaModal.classList.toggle('janela_Ativa');
        /* imgModal.src.setAttribute('img'); */
        /* imgModal.src= img.src; */

    });
}


/* imgModal.addEventListener('click',function(){
   
}) */

btnFechar.addEventListener('click', function () {

    janelaModal.classList.add('escondeJanelaModal');
})

/* console.log(mini);  */

/* mini.addEventListener('click',function(){

    mostrarJanela();
});  */