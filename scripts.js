document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            alert(`Thank you, ${name}! We have received your message.`);
            contactForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });
});

function showSlide(carouselId, index) {
    const carousel = document.getElementById(carouselId);
    const slides = carousel.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }
    const offset = -index * 100;
    carousel.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
    carousel.dataset.index = index;
}

function nextSlide(carousel1, carousel2) {
    const carousel = document.getElementById(carousel1);
    let index = parseInt(carousel.dataset.index || 0);
    showSlide(carousel1, index + 1);
}

function prevSlide(carousel1, carousel2) {
    const carousel = document.getElementById(carousel1);
    let index = parseInt(carousel.dataset.index || 0);
    showSlide(carousel1, index - 1);
}


