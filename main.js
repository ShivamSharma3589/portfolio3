let a = document.getElementsByClassName('a');
let bar = document.getElementById('bar');
let navbar = document.getElementById('navbar');
let aboutSection = document.getElementById('about-section');
let socialLinks = document.getElementById('social-links');
let article = document.getElementsByClassName('article')[0];
let section1 = document.getElementById('section1');
let section2 = document.getElementById('section2');
let section3 = document.getElementById('section3');
let section4 = document.querySelectorAll('#section4 > div');
let projects = document.getElementsByClassName('project');
let fieldset = document.getElementById('fieldset');
let name = document.getElementById('Name');
let number = document.getElementById('Number');
let email = document.getElementById('Email');
let message = document.getElementById('Message');
let send = document.getElementById('send');
let media = window.matchMedia("(max-width:600px)");     //media query
// window onload function goes here 
window.onload = () => {
    a[0].style.color = 'aqua';
    if (media.matches) {
        // a[1].href = '#';
        a[0].style.borderLeft = '0.5rem solid aqua';
        navbar.style.display = 'none';
    } else {
        a[0].style.borderBottom = '0.4rem solid aqua';
    }
}
// to reset navbar everytime use 
function Navbar(value) {
    let aLength = a.length;
    if (media.matches) {
        for (let i = 0; i < aLength; i++) {
            a[i].style.borderLeft = 'none';
            a[i].style.color = 'white';
        }
        a[value].style.borderLeft = '0.5rem solid aqua';
        socialLinks.style.display = 'none';
    } else {
        for (let i = 0; i < aLength; i++) {
            a[i].style.borderBottom = 'none';
            a[i].style.color = 'white';
        }
        a[value].style.borderBottom = '5px solid aqua';
    }
    a[value].style.color = 'aqua';
    aboutSection.style.display = 'none';
    section2.style.display = 'none';
    // section3.style.display = 'none';
    let projectsLength = projects.length;
    for (let i = 0; i < projectsLength; i++) {
        projects[i].style.display = 'none';
    }
    section4[0].style.display = 'none';
    section4[1].style.display = 'none';
}
// all anvigation button goes here 
a[0].addEventListener('click', () => {
    Navbar(0);
});
a[1].addEventListener('click', () => {
    Navbar(1);
    aboutSection.style.display = 'block';
    // location.replace('#about-section');
    if (media.matches) {
        // article.scrollTo(0 , 0);
        setTimeout(() => {
            article.scrollTo(0, window.innerHeight);
        }, 500);
    }
});
a[2].addEventListener('click', () => {
    Navbar(2);
    section2.style.display = 'block';
});
a[3].addEventListener('click', () => {
    Navbar(3);
    section3.style.display = 'block';
    let projectsLength = projects.length;
    for (let i = 0; i < projectsLength; i++) {
        projects[i].style.display = 'block';
    }
});
a[4].addEventListener('click', () => {
    Navbar(4);
    section4[0].style.display = 'block';
    section4[1].style.display = 'block';
    if (media.matches) {
        setTimeout(() => {
            socialLinks.style.display = 'flex';
        }, 1500);
    }
});
// navbar bar is here 
bar.addEventListener('click', () => {
    if (navbar.style.display == 'none') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none';
    }
});
// To hide the navbar at once on click
navbar.addEventListener('click', () => {
    if (media.matches) {
        navbar.style.display = 'none';
    }
});
// to send the message via whatsapp 
let link = '';
send.addEventListener('click', () => {
    link = `https://api.whatsapp.com/send/?phone=919555337468&text=Name+:+*${name.value.replace(/ /g, '+')}*+Phone+no+:+*${number.value}*+Email+Id+:+*${email.value}*+Message+:+*${message.value.replace(/ /g, '+')}*`;
    if ((name.value != '') && (name.value != ' ') && ((number != '') && (number.value != ' ')) && ((email.value != '') && (email.value != ' ')) && ((message.value != '') && (message.value != ' '))) {
        location.replace(link);
    }
});
