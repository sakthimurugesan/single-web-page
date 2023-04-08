const btn=document.getElementsByClassName("btn")[0];
const navbar=document.getElementsByClassName("navbar")[0];
const navbar_links=document.getElementsByClassName("navbar-links")[0];
btn.addEventListener('click',()=>
{
    navbar.classList.toggle("active");
    navbar_links.classList.toggle("active");
})
navbar_links.addEventListener("click",()=>
{
    navbar.classList.toggle("active");
    navbar_links.classList.toggle("active");
})