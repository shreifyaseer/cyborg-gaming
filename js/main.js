// select Element 
let nav = document.querySelector(".nav .links");
let navSection = document.querySelector(".nav");
let btnOpen = document.querySelector(".nav .open");
let btnClose = document.querySelector(".nav .close");
// select Element 

// open for navBar
btnOpen.onclick = function () {
    nav.style.top = '100px'
    btnClose.style.display = 'block'
    btnOpen.style.display = 'none'
}

// close for navBar
btnClose.onclick = function () {
    nav.style.top = '-500px'
    btnClose.style.display = 'none'
    btnOpen.style.display = 'block'
}


// nav bar fixed

window.addEventListener("scroll", () => {
    if (scrollY > 0) {
        navSection.classList.add("fixed")
    } else {
        navSection.classList.remove("fixed")
        
    }
})
