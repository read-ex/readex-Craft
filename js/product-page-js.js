    
let slides = document.querySelectorAll(".mySlides");
let dots = document.querySelectorAll(".dot");
let slideIndex = 0;
let animationController1 = 0;
let animationController2 = 0;
let autoScrollInterval;

function resetControllers() {
    animationController1 = 0;
    animationController2 = 0;
}

function updateActiveDot(n) {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[n].classList.add("active");
}

function applyAnimation(element, animation, callback) {
    element.style.animation = animation;
    setTimeout(() => {
        callback();
    }, 398); // Match animation duration
}

function forward(n) {
    let previousIndex = n === 0 ? slides.length - 1 : n - 1;
    applyAnimation(slides[previousIndex], "slide1 .40s cubic-bezier(0.04, 0.05, 0.88, 0.41) 1", () => {
        slides[previousIndex].style.display = "none";
    });
    applyAnimation(slides[n], "slide3 .40s cubic-bezier(0.04, 0.55, 0.81, 0.94) 1", () => {
        slides[n].style.display = "flex";
        updateActiveDot(n);
        slideIndex = n;
        resetControllers();
    });
}

function backward(n) {
    let nextIndex = n === slides.length - 1 ? 0 : n + 1;
    applyAnimation(slides[nextIndex], "slide .40s cubic-bezier(0.04, 0.05, 0.88, 0.41) 1", () => {
        slides[nextIndex].style.display = "none";
    });
    applyAnimation(slides[n], "slide4 .40s cubic-bezier(0.04, 0.55, 0.81, 0.94) 1", () => {
        slides[n].style.display = "flex";
        updateActiveDot(n);
        slideIndex = n;
        resetControllers();
    });
}

function showSlides(n) {
    if (n >= slides.length) n = 0;
    if (n < 0) n = slides.length - 1;

    if (animationController1 > animationController2) {
        forward(n);
    } else if (animationController1 < animationController2) {
        backward(n);
    } else {
        slides.forEach(slide => (slide.style.display = "none"));
        slides[n].style.display = "flex";
        updateActiveDot(n);
        slideIndex = n;
        resetControllers();
    }
}

function handleGesture(deltaX, deltaY) {
    // Only slide if the gesture is primarily horizontal
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX < 0) {
            slideIndex++;
            animationController1++;
            animationController2--;
            showSlides(slideIndex);
        } else if (deltaX > 0) {
            slideIndex--;
            animationController1--;
            animationController2++;
            showSlides(slideIndex);
        }
    }
}

const slider = document.querySelector('.slideshow-container');
if (slider) {
    let startX = 0, startY = 0;
    let isMouseDown = false;

    // Touch Events
    slider.addEventListener('touchstart', (e) => {
        clearInterval(autoScrollInterval); // Pause auto-scroll
        startX = e.changedTouches[0].screenX;
        startY = e.changedTouches[0].screenY;
    });

    slider.addEventListener('touchend', (e) => {
        let endX = e.changedTouches[0].screenX;
        let endY = e.changedTouches[0].screenY;
        handleGesture(endX - startX, endY - startY);
        startAutoScroll(); // Resume auto-scroll
    });

    // Mouse Events
    slider.addEventListener('mousedown', (e) => {
        clearInterval(autoScrollInterval); // Pause auto-scroll
        isMouseDown = true;
        startX = e.clientX;
        startY = e.clientY;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        const endX = e.clientX;
        const endY = e.clientY;
        const deltaX = endX - startX;
        const deltaY = endY - startY;

        // Trigger slide for horizontal swipe
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            e.preventDefault(); // Prevents vertical scrolling for horizontal swipes
            handleGesture(deltaX, deltaY);
            isMouseDown = false; // Reset after swipe
        }
    });

    slider.addEventListener('mouseup', () => {
        isMouseDown = false;
        startAutoScroll(); // Resume auto-scroll
    });

    slider.addEventListener('mouseleave', () => {
        isMouseDown = false;
    });
}
addToCartBtn.addEventListener('click', function() {
            const product = {
                id: 'readex-quran-stand',
                name: 'Readex-Adjustable Quran Stand',
                price: 3950,
                quantity: quantity,
                image: 'Assets/img/product-1.jpg'
            };
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const existing = cart.find(item => item.id === product.id);
            if (existing) {
                existing.quantity += quantity;
            } else {
                cart.push(product);
            }
            localStorage.setItem('cart', JSON.stringify(cart));
            });

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

// Initialize the slideshow
showSlides(slideIndex);
