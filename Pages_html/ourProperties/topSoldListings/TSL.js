const backToTop_btn = document.querySelector(".backToTop_btn");
const backToTop_btn_open = document.querySelector(".backToTop_btn_open");
const sidebar_menu = document.querySelector(".sidebar_menu");
const sideBar = document.querySelector(".sideBar");
const sideBarMenu = document.querySelector("._menu");
const nav1 = document.querySelector(".nav1");
const nav2 = document.querySelector(".nav2");
const nav3 = document.querySelector(".nav3");
const nav4 = document.querySelector(".nav4");
const nav5 = document.querySelector(".nav5");
const nav6 = document.querySelector(".nav6");
const ourProperties_list = document.querySelector(".ourProperties_list");
const workWithUs_list = document.querySelector(".workWithUs_list");
const services_list = document.querySelector(".services_list");
const aboutUs_list = document.querySelector(".aboutUs_list");
const ourProperties = document.querySelector(".ourProperties");
const workWithUs = document.querySelector(".workWithUs");
const services = document.querySelector(".services");
const aboutUs = document.querySelector(".aboutUs");
const effect1 = document.querySelector(".effect1");
const effect2 = document.querySelector(".effect2");
const effect3 = document.querySelector(".effect3");
const effect4 = document.querySelector(".effect4");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");
const arrow3 = document.querySelector(".arrow3");
const arrow4 = document.querySelector(".arrow4");
const img1 = document.querySelector("#img1");
const showHover = document.querySelector("#showHover");

window.addEventListener("scroll", ()=> {
    if (window.scrollY >= 1300){
        backToTop_btn.classList.add("backToTop_btn_open");
    } else {
        backToTop_btn.classList.remove("backToTop_btn_open");
    }
});

function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

function openMenu(){
    sidebar_menu.classList.add("sidebar_menu_open");
    sideBar.classList.add("sideBar_open");
    nav1.style.display = ("none");
    nav2.style.display = ("none");
    nav3.style.display = ("none");
    nav4.style.display = ("none");
    nav5.style.display = ("none");
    nav6.style.display = ("none");
    sideBarMenu.style.display = ("none");
    document.body.style.overflow = ("hidden"); 
    backToTop_btn.classList.remove("backToTop_btn_open");
    ourProperties_list.style.display = "none";
    workWithUs_list.style.display = "none";
    services_list.style.display = "none";
    aboutUs_list.style.display = "none";
    ourProperties.style.marginBottom = "49px";
    workWithUs.style.marginBottom = "49px";
    services.style.marginBottom = "49px";
    aboutUs.style.marginBottom = "49px";
    arrow1.style.transform = "rotate(180deg)";
    arrow2.style.transform = "rotate(180deg)";
    arrow3.style.transform = "rotate(180deg)";
    arrow4.style.transform = "rotate(180deg)";
    };

    function closeMenu(){
        sidebar_menu.classList.remove("sidebar_menu_open");
        sideBar.classList.remove("sideBar_open");
        nav1.style.display = ("inline-block");
        nav2.style.display = ("inline-block");	
        nav3.style.display = ("inline-block");
        nav4.style.display = ("inline-block");
        nav5.style.display = ("inline-block");
        nav6.style.display = ("inline-block");
        sideBarMenu.style.display = ("inline-block");
        document.body.style.overflowY = "scroll";
        ourProperties.style.marginBottom = "49px";
        workWithUs.style.marginBottom = "49px";
        services.style.marginBottom = "49px";
        aboutUs.style.marginBottom = "49px";
        ourProperties_list.style.display = "none";
        effect1.style.borderBottom = "none";
        effect2.style.borderBottom = "none";
        effect3.style.borderBottom = "none";
        effect4.style.borderBottom = "none";
        if (window.scrollY >= 1300){
            backToTop_btn.classList.add("backToTop_btn_open");
        } ;
        };
        
        function showOP(){
        if (ourProperties_list.style.display == "none"){
            ourProperties_list.style.display = "inline-block";
            ourProperties.style.marginBottom = "10px";
            effect1.style.borderBottom = "1px solid white";
            arrow1.style.transform = "rotate(0)";
        } else {
            ourProperties_list.style.display = "none";
            ourProperties.style.marginBottom = "49px";
            effect1.style.borderBottom = "none";
            arrow1.style.transform = "rotate(180deg)";
            
        };
        };
        
        function showWWUS(){
        if (workWithUs_list.style.display == "none"){
            workWithUs_list.style.display = "inline-block";
            workWithUs.style.marginBottom = "10px";
            effect2.style.borderBottom = "1px solid white";
            arrow2.style.transform = "rotate(0)";
        } else {
            workWithUs_list.style.display = "none";
            workWithUs.style.marginBottom = "49px";
            effect2.style.borderBottom = "none";
            arrow2.style.transform = "rotate(180deg)";
        };
        };
        
        function showServ(){
        if (services_list.style.display == "none"){
            services_list.style.display = "inline-block";
            services.style.marginBottom = "10px";
            effect3.style.borderBottom = "1px solid white";
            arrow3.style.transform = "rotate(0)";
        } else {
            services_list.style.display = "none";
            services.style.marginBottom = "49px";
            effect3.style.borderBottom = "none";
            arrow3.style.transform = "rotate(180deg)";
        };
        };
        
        
        function showAboutUs(){
        if (aboutUs_list.style.display == "none"){
            aboutUs_list.style.display = "inline-block";
            aboutUs.style.marginBottom = "10px";
            effect4.style.borderBottom = "1px solid white";
            arrow4.style.transform = "rotate(0)";
        } else {
            aboutUs_list.style.display = "none";
            aboutUs.style.marginBottom = "49px";
            effect4.style.borderBottom = "none";
            arrow4.style.transform = "rotate(180deg)";
        };
        };

        // img1.addEventListener("hover", ()=> {
        //     showHover.style.zIndex = "1";
        // })

        // Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict';
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();