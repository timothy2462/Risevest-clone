// alert('hello world')
// Adding shadow to navbar when user scrolls 
window.addEventListener("scroll", (e) => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 10) {
        nav.classList.add("add-shadow")
    } else {
        nav.classList.remove("add-shadow")
    }
});

// Mobile Navigator
const navBtn = document.querySelector(".navBtn");
const mobileNav = document.querySelector("#navigator");
const navBtnImg = document.querySelector(".navBtn img")

navBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("hide")
    
    if (mobileNav.classList.contains("hide")) {
        navBtnImg.src = "./img/navbtn.svg"
    } else {
        navBtnImg.src = "./img/cancel-nav.svg"
    }
})

// adding animation to the partner section

window.addEventListener('scroll', ()=>{
    let partners = document.querySelector('.partners')
    let partnersPosition = partners.getBoundingClientRect().top;
    let screenPosition = window.innerHeight ;
    if(partnersPosition < screenPosition){
        partners.classList.add('active');
    }
    else{
        partners.classList.remove('active')
    }
});



