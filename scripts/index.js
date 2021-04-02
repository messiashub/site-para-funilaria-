/* BOTÃO TOPO */

/* window.onscroll = function(){
    if(document.body.clientWidth > 480){
         scrollTopo();
    }
   
}

function scrollTopo(){
    let btn_topo = document.getElementById("link_topo");
    if(document.documentElement.scrollTop  > 50){
        btn_topo.style.display ="flex";
       

    }else{
        btn_topo.style.display ="none";
    }
}

function backToTop(){
    document.documentElement.scrollTop= 0;
}

 */



const nav = document.getElementById('nav1');
const toNav = nav.offsetTop;
console.log(nav.classList)


window.onscroll = () => {
    ficarNoTop();
    if(document.body.clientWidth > 480){
      scrollTopo()  
    }
    
}
console.log()


function ficarNoTop() {
    if (window.pageYOffset >= toNav) {
        nav.classList.add("fixed-top")
    } else {
        nav.classList.remove("fixed-top")
    }
}




/* window.onscroll = function(){
    if(document.body.clientWidth > 480){
         scrollTopo();
    }
   
} */

function scrollTopo(){
    let btn_topo = document.getElementById("link_topo");
    if(document.documentElement.scrollTop  > 50){
        btn_topo.style.display ="flex";
       

    }else{
        btn_topo.style.display ="none";
    }
}

function backToTop(){
    document.documentElement.scrollTop= 0;
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


if(elementos.length){
    window.addEventListener('scroll',function(){
        animaScroll();
    })
} 
/* window.addEventListener('scroll', function () {
    animaScroll();
}) */


/* MODAL */
let imagens= document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal1');
let modalImage = document.querySelector('#modal_img');
let btnClose = document.querySelector('#bt_close');
let srcValor = "";


for(let i = 0 ; i < imagens.length; i++){
    imagens[i].addEventListener("click", function(){

        srcValor = imagens[i].getAttribute('src');
        modalImage.setAttribute('src',srcValor);
       
        modal.classList.toggle('modal_ativo');

    });
}

btnClose.addEventListener('click',function(){
    modal.classList.toggle('modal_ativo');
});




