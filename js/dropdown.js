const dropdowns = document.querySelectorAll('.content');
const dropdownButtons = document.querySelectorAll('.drop-itemjs');
const buttonTransition = document.querySelectorAll('.dropdown-img-container');

dropdownButtons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const dropdown = dropdowns[idx];
        const imgContainer = buttonTransition[idx];
        const isOpen = dropdown.classList.contains('active');

        if (isOpen) {
            dropdown.classList.remove('active');
            dropdown.classList.add('inactive');
            setTimeout(() => {
            dropdown.style.display = 'none';
            
            }, 300); // Wait for the transition to finish
           imgContainer.classList.remove('rotated');
            imgContainer.classList.add('not-rotated');
            
        } else {
            dropdown.classList.remove('inactive');
            dropdown.classList.add('active');
            dropdown.style.display = 'block';
             imgContainer.classList.remove('not-rotated');
            imgContainer.classList.add('rotated');
            
        }
    });
});
