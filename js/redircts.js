document.querySelectorAll('.gotoproductpage').forEach(function(btn) {
    btn.addEventListener('click', function() {
        window.location.href = "product.html";
    });
});
var goToShopBtn = document.querySelector('.gotoshop');
if (goToShopBtn) {
    goToShopBtn.addEventListener('click', function() {
        window.location.href = "shop.html";
    });
}

function faqButton(){
 console.log("Redirecting to WhatsApp");
    var phone = '918921324114';
    var text = 'Hello';
    // Use the wa.me web URL (works in browsers and will open WhatsApp app on mobile if available)
    var url = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(text);
    window.open(url, '_blank');
}