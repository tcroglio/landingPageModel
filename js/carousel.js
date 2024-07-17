document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.item');
    let slideIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.style.display = 'none';
        });

        slides[index].style.display = 'block';
    }

    function nextSlide() {
        slideIndex = (slideIndex + 1) % totalSlides;
        showSlide(slideIndex);
        console.log('nextSlide')
    }

    function prevSlide() {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
        showSlide(slideIndex);
        console.log('prevSlide')
    }

    setInterval(nextSlide, 5000);

    showSlide(slideIndex);

    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);
});