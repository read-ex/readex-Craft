
 document.addEventListener("DOMContentLoaded", function () {
            const themeColorMeta = document.getElementById("theme-color");
            const themeColor = getComputedStyle(document.documentElement).getPropertyValue("--theme-color").trim();
            themeColorMeta.setAttribute("content", themeColor);
        });
    
    window.onload = function () {
        const heading = document.getElementById("heading-text");
        const paragraf = document.getElementById("peragraf-text");
        let index = 0;
        let headings = [
          "Sturdy and durable construction", 
          "Wheels for easy portability", 
          "Adjustable height", 
          "Easy to use", 
         "Perfect for reading the Quran"
        ];
        let paragrafes=[
            "The stand is made of high-quality wood and is designed to last for years of use.",
            "The stand has wheels for easy movement, so you can take it with you wherever you go.",
            "The stand can be adjusted to fit your needs, so you can find the perfect position for your reading. The height can be adjusted up to 106 cm, so you can read by standing.",
            "The stand is easy to set up and use, so you can start reading right away",
            "The stand is the perfect size for reading the Quran, and it will help you to focus on the text."
        ];
        function call() {
            if (index<5){
                index++;
                setTimeout(exicute, 3500);
            }
        }
        function exicute() {
            heading.style.display="none";
                paragraf.style.display="none";
            if (index==5) {
                    index=0;
                }
            if (index<5) {
                setTimeout(()=>{
                    heading.style.display="block";
                    paragraf.style.display="block";
                }, 100);
                
                heading.textContent = headings[index];
                paragraf.textContent = paragrafes[index];
                call();
            }
        }
        exicute();
    }
document.addEventListener("DOMContentLoaded", function () {
        const texts = ["Love", "Kindness", "Friendship", "Gratitude", "Kindness", "Meaning", "Happiness", "Appreciation"];
        let textIndex = 0;
        let charIndex = 0;
        const typingElement = document.getElementById("typing");

        function type() {
            if (charIndex < texts[textIndex].length) {
                typingElement.textContent += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // Adjust the delay as needed
            } else {
                setTimeout(erase, 2000); // Pause before erasing
            }
        }

        function erase() {
            if (charIndex > 0) {
                typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, 50); // Adjust the delay as needed
            } else {
                textIndex = (textIndex + 1) % texts.length;
                setTimeout(type, 500); // Pause before typing next word
            }
        }

        type();
    });