const nav = document.getElementById('nav1');
const toNav = nav.offsetTop;
console.log(nav.classList)


window.onscroll = () => {
    ficarNoTop();
   /*  if(document.body.clientWidth > 480){
      scrollTopo()  
    } */
    
}
console.log()


function ficarNoTop() {
    if (window.pageYOffset >= toNav) {
        nav.classList.add("fixed-top")
    } else {
        nav.classList.remove("fixed-top")
    }
}