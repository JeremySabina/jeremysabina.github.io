const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');



// Open Menu //

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// Close Menu //

if (navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Close Menu with button //

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When each nav link is clicked it will remove the show class css //
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// const loadText = document.querySelector('.loading-text');
// const bg = document.querySelector('.bg');

// let load = 0;

// let int = setInterval(blurring, 30);

// function blurring() {
//     load++

//     if(load > 99) {
//         clearInterval(int)
//     }


//     loadText.innerText = `${load}%`
//     loadText.style.opacity = scale(load, 0, 100, 1, 0)
//     bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
// }

// //received from stackOverflow to fade the loading bar out
// function scale (number, inMin, inMax, outMin, outMax) {
//     return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
// }