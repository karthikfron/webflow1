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


/* TODO : */
/* Smooth scrolling effect while transitioning different section */
/* contact sales and browse project smooth scrool */
 document.getElementById('hero-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  });
  
  document.getElementById('our-projects').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
  }); 
 /* nav smooth scrooling*/
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
/* // Add intersection observer API effects in services section */

const serviceCards = document.querySelectorAll('.service-card');
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }else{
        entry.target.classList.remove('in-view');
    }
  });
}, { threshold: 0});  
serviceCards.forEach(card => observer.observe(card));
/* // Add Slider component for project-card preview  */
