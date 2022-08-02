const fdrop = document.querySelector(".fdrop");
const dropd = document.querySelector(".myDropdown");
const cdrop = document.querySelector(".cdrop");
const cdropd= document.querySelector(".cdropdown");
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const close = document.querySelector(".close");
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const up2 = document.querySelector('.up2');
const down2 = document.querySelector('.down2');



fdrop.addEventListener('click', function(){
    dropd.classList.toggle('show');
    down.classList.toggle('hide');
    up.classList.toggle('show');
});
cdrop.addEventListener('click', function(){
   cdropd.classList.toggle('show');
   down2.classList.toggle('hide');
    up2.classList.toggle('show');
});

const mfd = document.querySelector(".fdd")
const fd = document.getElementById("fd").addEventListener('click', function(){
    mfd.classList.toggle('show');
    mdown.classList.toggle('hide');
    mup.classList.toggle('show')
});

// mobile functions

const mcd = document.querySelector(".cdd");
const cd = document.getElementById("cds");

const mup = document.querySelector('.mup');
const mdown = document.querySelector('.mdown');
const mup2 = document.querySelector('.mup2');
const mdown2 = document.querySelector('.mdown2');

cd.addEventListener('click', function(){
    mcd.classList.toggle("show");
    mdown2.classList.toggle('hide');
    mup2.classList.toggle('show')
});

menuBtn.addEventListener('click',function(){
    close.classList.toggle('back');
    menu.classList.toggle('flex');
    men.classList.toggle('hide');
    meni.classList.toggle('show');
    mdown.classList.remove('hide');
    mup.classList.remove('show')
    mdown2.classList.remove('hide');
    mup2.classList.remove('show')
});
close.addEventListener('click', function(){
    menu.classList.remove('flex');
    close.classList.remove('back');
    mfd.classList.remove('show');
    mcd.classList.remove("show");
    men.classList.remove('hide');
    meni.classList.remove('show');
    

});

const men = document.querySelector('.men');
const meni = document.querySelector('.meni');
