let menu = document.querySelector('#menu-btn');
let navbarlinks = document.querySelector('.header .navbar .nav-menu .links');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbarlinks.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbarlinks.classList.remove('active');
}


window.onscroll = () =>{
    if(window.scrollY > 60){
        document.querySelector('.header .navbar').classList.add('active');
    }else{
        document.querySelector('.header .navbar').classList.remove('.active');

    };
}
