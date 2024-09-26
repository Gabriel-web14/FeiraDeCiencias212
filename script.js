let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slideshow-container img');
const dots = document.querySelectorAll('.dot'); // Para as bolinhas

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0; // Retorna ao início
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1; // Vai para o último slide
    } else {
        currentSlideIndex = index;
    }

    // Oculta todos os slides e mostra o atual
    slides.forEach((slide, i) => {
        slide.style.display = (i === currentSlideIndex) ? 'block' : 'none';
    });

    // Atualiza as bolinhas
    updateDots();
}

function plusSlides(n) {
    showSlide(currentSlideIndex + n);
}

function currentSlide(n) {
    showSlide(n - 1);
}

// Atualiza a cor das bolinhas
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlideIndex) {
            dot.classList.add('active');
        }
    });
}

// Iniciar mostrando o primeiro slide
window.onload = function() {
    showSlide(0); // Exibir o primeiro slide
};