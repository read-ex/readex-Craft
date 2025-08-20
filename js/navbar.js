const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
const Links = document.querySelector('.links');
const touchoff = document.querySelector('.touchoff');
toggleButton.addEventListener('click', () => {
   
    navbarLinks.classList.toggle('active');
});


function close1() {
    
    Links.classList.add("close-animation");
    setTimeout(()=>{
        navbarLinks.classList.remove('active');
        Links.classList.remove("close-animation");
        
    },400);
}

touchoff.addEventListener('click', () => {

        close1();
        console.log("close");
});
const logo = document.querySelector('.logo img');
if (logo) {
    logo.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'index.html';
    });
}