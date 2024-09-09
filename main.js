/*===========toggle icon navbar===========*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
menuIcon.classList.toggle('fa-xmark');
navbar.classList.toggle('active')
}

/*scroll section active link */

let sections = document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[herf*=' + id +']').classList.add('active');
            });
        };
    });

    /*sticky navbar*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    /*remove toggle iconand navbar*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');

};

/*scroll reveal*/
ScrollReveal({ 
    distance: '80px' ,
    duration: 2000,
    delay: 200,
 });
 ScrollReveal().reveal('.home-contant,heading', {origin: 'top'});
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contant form', {origin: 'buttom'});
 ScrollReveal().reveal('.home-contant h1, .about-img', {origin: 'left'});
 ScrollReveal().reveal('.home-contant p, .about-content', {origin: 'right'});

 