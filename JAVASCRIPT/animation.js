window.addEventListener("scroll", ()=> {
    if (window.scrollY >= 50){
        nav.classList.add("navbar_scroll");
    } else {
        nav.classList.remove("navbar_scroll");
    }
});


window.addEventListener("scroll", ()=> {
    if (window.scrollY >= 500){
        headInSec1.classList.add("headInSec1_Animate");
    } 
});

window.addEventListener("scroll", ()=> {
    if (window.scrollY >= 1300){
        bddrGif.classList.add("bddr_gif_animate");
    } 
});

window.addEventListener("scroll", ()=> {
    if (window.scrollY >= 1300){
        backToTop_btn.classList.add("backToTop_btn_open");
    } else {
        backToTop_btn.classList.remove("backToTop_btn_open");
    }
})
























