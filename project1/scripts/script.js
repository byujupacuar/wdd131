// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Lazy Loading
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages = document.querySelectorAll("img.lazyload");
  var imageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var image = entry.target;
        image.src = image.dataset.src;
        image.classList.remove("lazyload");
        imageObserver.unobserve(image);
      }
    });
  });

  lazyloadImages.forEach(function(image) {
    imageObserver.observe(image);
  });
});

// Form Submission (Local Storage)
const enrollmentForm = document.getElementById('enrollmentForm');
const formMessage = document.getElementById('formMessage');

enrollmentForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    // Basic validation
    if (!name || !email || !phone) {
        formMessage.textContent = 'Por favor, completa todos los campos.';
        formMessage.style.color = 'red';
        return;
    }

    // Create enrollment object
    const enrollmentData = {
        name,
        email,
        phone,
        timestamp: new Date().toISOString()
    };

    // Save to localStorage
    let enrollments = JSON.parse(localStorage.getItem('enrollments')) || [];
    enrollments.push(enrollmentData);
    localStorage.setItem('enrollments', JSON.stringify(enrollments));

    // Show success message
    formMessage.textContent = '¡Inscripción enviada con éxito!';
    formMessage.style.color = 'green';

    // Optionally reset form
    enrollmentForm.reset();
});
