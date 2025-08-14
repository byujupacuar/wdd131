document.addEventListener('DOMContentLoaded', function() {

    // --- 1. Hamburger Menu ---
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileNav = document.querySelector('.mobile-nav');

    if (hamburgerButton && mobileNav) {  // Check if elements exist
        hamburgerButton.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }

    // --- 2. Enrollment Form Submission and localStorage ---
    const enrollmentForm = document.getElementById('enrollmentForm');

    if (enrollmentForm) {
        enrollmentForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const course = document.getElementById('course').value;

            // Create an object
            const formData = {
                name: name,
                email: email,
                course: course
            };

            // Store in localStorage
            localStorage.setItem('enrollmentData', JSON.stringify(formData));

            // Template literal for output
            alert(`¡Gracias, ${name}! Te has inscrito en ${course}.`);
            enrollmentForm.reset();
        });
    }

    // --- 3. Displaying Enrollment Data from localStorage (on index.html) ---
    const displayEnrollmentData = document.getElementById('displayEnrollmentData');

    if (displayEnrollmentData) {
        const storedData = localStorage.getItem('enrollmentData');

        if (storedData) {
            const parsedData = JSON.parse(storedData);
            // Template literal
            const output = `
                <h2>Última Inscripción:</h2>
                <p>Nombre: \${parsedData.name}</p>
                <p>Email: \${parsedData.email}</p>
                <p>Curso: \${parsedData.course}</p>
            `;
            displayEnrollmentData.innerHTML = output;
        } else {
            displayEnrollmentData.textContent = "No hay inscripciones recientes.";
        }
    }


    // --- 4. Lazy Loading for Gallery Images ---
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');

    function loadImages(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;  // Set the `src` from `data-src`
                img.onload = () => { //Optional: Remove loading class once loaded
                    img.classList.remove('loading');
                }
                observer.unobserve(img);
            }
        });
    }

    const lazyLoadObserver = new IntersectionObserver(loadImages, {
        rootMargin: "0px 0px 50px 0px",  // Load images 50px before they're visible
        threshold: 0.1 // Trigger when 10% of the image is visible
    });

    lazyImages.forEach(img => {
        img.classList.add('loading');  // Add loading class for styling
        lazyLoadObserver.observe(img);
    });

    //--- 5. Example of Array methods. In this case filtering an array
    const courses = [
        {name: 'Maquillaje Profesional', price: 500},
        {name: 'Peluqueria y Estilismo', price: 600},
        {name: 'Uñas Acrilicas', price: 450}
    ];

    const affordableCourses = courses.filter(course => course.price < 550);
    console.
