const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

var icon = document.getElementById("icon");
icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "images/moon.png";
    }
    else{
        icon.src = "images/sun.png";
    }
}

var off = document.getElementById("switchoff");
off.onclick = function(){
    document.body.classList.toggle("");
    if(document.body.classList.contains("")){
        off.src = "images/pic_bulbon.gif";
    }
    else{
        off.src = "images/pic_bulboff.gif";
    }
}

