// Use the latest modular SDK from Firebase version 9+
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
        import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
var quantity=1;
document.addEventListener('DOMContentLoaded', function() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            if (cart.length === 0) {
                document.querySelector('.total-amount').textContent = 3950;
            }else{
                document.querySelector('.total-amount').textContent = cart[0].price*cart[0].quantity - cart[0].discount*cart[0].quantity;
                quantity=cart[0].quantity;
            }
        });


        // -----------------------------------------------------------------------------------
        // STEP 2: PASTE YOUR FIREBASE CONFIGURATION HERE
        // Find this in your Firebase project settings under "General" -> "Your apps".
        // It's crucial that you replace these placeholder values with your actual config.
        // -----------------------------------------------------------------------------------
        const firebaseConfig = {
  apiKey: "AIzaSyD6pUbSxksN1uPTuvV8ckSl5241a6c0bS8",
  authDomain: "readex-userdata.firebaseapp.com",
  projectId: "readex-userdata",
  storageBucket: "readex-userdata.firebasestorage.app",
  messagingSenderId: "610302361527",
  appId: "1:610302361527:web:cb5be0d9e38cca9dd0b232",
  measurementId: "G-CJVYZ0JG9C"
};

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        // Get a reference to the Firestore database service
        const db = getFirestore(app);
console.log(db);
        // -----------------------------------------------------------------------------------
        // STEP 3: JAVASCRIPT TO HANDLE THE FORM SUBMISSION
        // -----------------------------------------------------------------------------------
        const shippingForm = document.getElementById('buyNow');
        // const statusMessage = document.getElementById('status-message');

        shippingForm.addEventListener('click', async (e) => {
            // Prevents the default form reload behavior
            e.preventDefault();

            // Get the current values from the form inputs
          var name = document.getElementById('name').value.trim();
          var address = document.getElementById('address').value.trim();
          var pincode = document.getElementById('pincode').value.trim();
          var country = document.getElementById('country').value.trim();
          var countryCode = document.getElementById('countryCode').value.trim();
          var state = document.getElementById('state').value.trim();
          var number = document.getElementById('number').value.trim();
            // statusMessage.textContent = 'Processing...';
            // statusMessage.className = 'text-gray-500';

            // Create a data object to save to Firestore
            const orderDetails = {
                fullName: name,
                address: address,
                pincode: pincode,
                country: country,
                countryCode:countryCode,
                state:state,
                number: number,
                orderStatus: 'pending', // You can add other useful info
                quantity: quantity,
                createdAt: serverTimestamp() // Adds a server-side timestamp
            };

            emailjs.init({
          publicKey: "NV4eIQjZIW9ebnWtE", // Get this from your EmailJS account
        });

        // 2. Add a click event listener to your button
           
        function sendOrderEmail() {
            // These IDs can be found in your EmailJS account
            const serviceID = 'service_c560en7';
            const templateID = 'template_1m6qi7l';

           

            // 4. Send the email using the object
            emailjs.send(serviceID, templateID, orderDetails)
                .then(() => {
                    alert('Order confirmation sent successfully!');
                }, (err) => {
                    alert('Failed to send confirmation. Error: ' + JSON.stringify(err));
                });
        }
         sendOrderEmail();
            // Use a try/catch block to handle potential errors
            try {
                // `addDoc` creates a new document with a unique, auto-generated ID in the "orders" collection.
                const docRef = await addDoc(collection(db, "orders"), orderDetails);
                
                console.log("Order data saved with ID: ", docRef.id);
                // statusMessage.textContent = '✅ Order confirmed successfully!';
                // statusMessage.className = 'text-green-600';
                // shippingForm.reset(); // Clear the form fields
                window.location.href = 'succsus.html';
            } catch (error) {
                console.error("Error saving document: ", error);
                // statusMessage.textContent = '❌ There was an error placing your order.';
                // statusMessage.className = 'text-red-600';
            }
        });


