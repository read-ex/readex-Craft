function renderNavbar() {
  return `
    <div class="white"></div>
    <nav>
      <div class="logo">
        <img src="Assets/icons/15_logo_readex(1).png" alt="" class="logo">
      </div>
      <div class="cart-and-menu">
        <div class="cart-icon">
          <a href="cart.html"><img src="Assets/icons/cart_icon.svg" alt=""></a>
        </div>
        <div class="toggle">
          <button class="menu" onclick="open1()">
            <img src="Assets/icons/align-left.svg" width="30px" alt="">
          </button>
        </div>
      </div>
    </nav>
  `;
}

function renderNavbarLinks() {
  return `
    <button class="touchoff" onclick="close1()"></button>
    <div class="links">
      <button onclick="close1()">
        <img src="https://www.svgrepo.com/show/350281/close.svg" alt="">
      </button>
      <ul>
        <li><a href="/readex-Craft/" class="nobuy">Home</a></li>
        <li><a href="about.html" class="nobuy">About Us</a></li>
        <li><a href="contact.html" class="nobuy">Contact Us</a></li>
        <li><a href="product.html" class="nobuy buy">Buy Now</a></li>
        <li><a href="Replacement-return.html" class="nobuy mobile">Return Policy</a></li>
        <li id="orderbutton"><a href="shop.html">Shop Now</a></li>
      </ul>
    </div>
  `;
}

function renderFooter() {
  return `
    <div class="footer">
      <div class="Contact-us">
        <h3>Contact Us</h3>
        <p>Email us at <a href="mailto:readexindia@gmail.com">readexindia@gmail.com</a></p>
        <p>Readex Crafts, Nellaya, Palakkad, Kerala,<br> India. 679335</p>
        <div class="social-media">
          <img src="Assets/icons/whatsapp.png" alt="whatsapp">
          <img src="Assets/icons/instagram.png" alt="instagram">
          <img src="Assets/icons/facebook.png" alt="Facebook">
          <img src="Assets/icons/youtube.png" alt="youtube">
        </div>
      </div>
      <div class="support">
        <h3>Support</h3>
        <ul>
          <li><a href="Replacement-return.html">Replacement and Return Policy</a></li>
          <li><a href="Privacy-policy.html">Shipping and Delivery Policy</a></li>
          <li><a href="Privacy-policy.html">Terms and Conditions</a></li>
          <li><a href="Replacement-return.html">Order Cancellation Policy</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div class="Product">
        <h3>Products</h3>
        <ul>
          <li><a href="product.html">Adjustable Quran Stand</a></li>
          <li><a href="#">Canvas wall painting</a></li>
        </ul>
      </div>
    </div>
    <div class="copyright"><p>© 2024 Readex Crafts, All Rights Reserved.</p></div>
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("navigation-bar")) {
    document.getElementById("navigation-bar").innerHTML = renderNavbar();
  }

  if (document.getElementById("footer-details")) {
    document.getElementById("footer-details").innerHTML = renderFooter();
  }
});


