const navbar=document.getElementById('hidenav');
const hideposition=500;
let previousScrollY=0;
window.addEventListener('scroll',()=>{
    const CurrentScrollY=window.screenY;
    const scrollUP=CurrentScrollY<previousScrollY;
    if (window.scrollY >= hideposition) {
        navbar.style.display='none'
        
    } else {
        navbar.style.display='flex'
    }
    previousScrollY=CurrentScrollY
});