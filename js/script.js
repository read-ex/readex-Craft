const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});


document.getElementById('buynow').addEventListener('click', function() {
    window.location.href = '/checkout.html';
});

let slideIndex = 1;
    showSlides(slideIndex);

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    let touchstartX = 0;
    let touchendX = 0;

    const slider = document.querySelector('.slideshow-container');

    slider.addEventListener('touchstart', (e) => {
        touchstartX = e.changedTouches[0].screenX;
    }, false);

    slider.addEventListener('touchend', (e) => {
        touchendX = e.changedTouches[0].screenX;
        handleGesture();
    }, false);

    slider.addEventListener('mousedown', (e) => {
        touchstartX = e.clientX;
    }, false);

    slider.addEventListener('mouseup', (e) => {
        touchendX = e.clientX;
        handleGesture();
    }, false);

    function handleGesture() {
        if (touchendX < touchstartX) plusSlides(1);
        if (touchendX > touchstartX) plusSlides(-1);
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }