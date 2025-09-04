
function open1() {
    
    const navbarLinks = document.querySelector(".navbar-links");
  if (navbarLinks) navbarLinks.innerHTML = renderNavbarLinks();
    navbarLinks.classList.toggle('active');    
     // Highlight the current page link
     
    const links = document.querySelectorAll('.navbar-links .links ul li a');
    const currentPath = window.location.pathname.startsWith('/') 
    ? window.location.pathname.substring(1).replace(/\/$/, "") 
    : window.location.pathname.replace(/\/$/, "");
    links.forEach(link => {
        const linkPath = link.getAttribute('href').replace(/\/$/, "");
        if (linkPath === currentPath && linkPath !== "shop.html") {
            link.style.color = "black";
        }
    
});
    
}

function close1() {
    const Links = document.querySelector('.links');
    const navbarLinks = document.querySelector(".navbar-links");
    Links.classList.add("close-animation");
    setTimeout(()=>{
        navbarLinks.classList.remove('active');
        Links.classList.remove("close-animation");
        
    },400);
}


const logo = document.querySelector('.logo img');
if (logo) {
    logo.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });}