// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });



        // Button for Lesson 1 (Video 1)
        document.getElementById("lesson1").addEventListener("click", function() {
        document.getElementById("videoFrame").src = "https://www.youtube.com/embed/6_gXiBe9y9A?";  // Video 1
        });

        // Button for Lesson 2 (Video 2)
        document.getElementById("lesson2").addEventListener("click", function() {
        document.getElementById("videoFrame").src = "https://www.youtube.com/embed/0FcwzMq4iWg?";  // Video 2
        });

        // Button for Lesson 3 (Video 3)
        document.getElementById("lesson3").addEventListener("click", function() {
        document.getElementById("videoFrame").src = "https://www.youtube.com/embed/Y4stD_ypaAI?";  // Video 2
        });

        // Button for Lesson 4 (Video 4)
        document.getElementById("lesson4").addEventListener("click", function() {
        document.getElementById("videoFrame").src = "https://www.youtube.com/embed/7Ae0prSLMa4?";  // Video 2
        });

        // Button for Lesson 5 (Video 5)
        document.getElementById("lesson5").addEventListener("click", function() {
        document.getElementById("videoFrame").src = "https://www.youtube.com/embed/IxZtbUTnb70?";  // Video 2
        });
