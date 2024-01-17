const menubarBtn = document.querySelector("#menubar-btn")
const navLinks = document.querySelectorAll("nav > ul > li > a")
const contactSubmitBtn = document.querySelector("#contact-submit-btn")

function handleMenuBar(){
    const navListItems = document.querySelector("header > nav > ul");
    navListItems.classList.toggle("active")
}

navLinks.forEach((link) => {
    link.addEventListener("click", handleMenuBar)
})

menubarBtn.addEventListener("click",handleMenuBar);


// TODO : 
// Smooth scrolling effect while transitioning different section
// Add intersection observer API effects in services section
// Add Slider component for project-card preview 