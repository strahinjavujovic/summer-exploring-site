var a=document.querySelector('.fa-bars');
var b=document.querySelector('.menu');
a.addEventListener('click',show);
function show(){
    b.classList.toggle('active');
}
