document.querySelectorAll('.gotoproductpage').forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location.href = "/product.html";
    });
});
 document.querySelector('.gotoshop').addEventListener('click', function() {
        window.location.href = "/shop.html";
    });
function checkOut(){
    window.location.href = "/address.html";
}