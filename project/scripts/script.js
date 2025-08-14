  // Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Course Data (Array of Objects)
const courses = [
    {
        name: "Makeup Artistry",
        price: 499,
        image: "images/image1.webp"
    },
    {
        name: "Hair Styling",
        price: 599,
        image: "images/image2.webp"
    },
    {
        name: "Nail Technology",
        price: 399,
        image: "images/image3.webp"
    },
    {
        name: "Make up FX",
        price: 399,
        image: "images/image4.webp"
    },
    {
        name: "Folc Make up",
        price: 399,
        image: "images/image5.webp"
    },
    {
        name: "social Make up",
        price: 399,
        image: "images/image6.webp"
    }
];

// Function to create course cards with lazy loading
function createCourseCard(course) {
    const card = document.createElement('div');
    card.classList.add('course-card');

    const img = document.createElement('img');
    img.src = 'placeholder.jpg';  // Placeholder image
    img.dataset.src = course.image; // Store actual image path in data-src
    img.alt = `\${course.name} Course`;
    img.classList.add('lazyload');

    const h3 = document.createElement('h3');
    h3.textContent = course.name;

    const p = document.createElement('p');
    p.textContent = `Price: ${course.price}`;

    const learnMoreLink = document.createElement('a');
    learnMoreLink.href = '#'; // Replace with actual link
    learnMoreLink.classList.add('button', 'accent-button');
    learnMoreLink.textContent = 'Learn More';

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(learnMoreLink);

    return card;
}

// Add courses to the page dynamically with lazy loading
document.addEventListener('DOMContentLoaded', function() {
    const courseListContainer = document.getElementById('courseList');

    courses.forEach(course => {
        const courseCard = createCourseCard(course);
        courseListContainer.appendChild(courseCard);
    });


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

if(enrollmentForm){

    enrollmentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const course = document.getElementById('course').value; // course is now the *value* from the select element

        // Find the course object from the courses array based on the selected value
        const selectedCourse = courses.find(c => c.name.toLowerCase().replace(/ /g, "") === course);

        // Store the data (you can stringify the whole object if needed)
        const enrollmentData = {
            name: name,
            email: email,
            phone: phone,
            course: selectedCourse ? selectedCourse.name : 'Unknown',
            coursePrice: selectedCourse ? selectedCourse.price : 0
        };

        localStorage.setItem('enrollmentData', JSON.stringify(enrollmentData)); // Store as JSON

        // Display a message
        formMessage.textContent = `Thank you, ${name}! You have enrolled in ${selectedCourse ? selectedCourse.name : 'selectedCourse'} course. We will contact you soon.`;
        formMessage.style.color = "green";

        // Optionally clear the form
        enrollmentForm.reset();

    });
}
