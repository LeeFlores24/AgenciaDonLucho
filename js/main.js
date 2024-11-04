// Carrusel de imágenes 
let imageIndex = 0; // Cambié el nombre para evitar conflictos
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
const indicators = document.querySelectorAll('.indicator');
let interval;

// Función para actualizar el carrusel de imágenes
const updateCarousel = () => {
    const offset = -imageIndex * 100; // Mueve la imagen actual al centro
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    updateIndicators();
};

// Función para actualizar los indicadores
const updateIndicators = () => {
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === imageIndex);
    });
};

// Eventos para los botones del carrusel de imágenes
document.querySelector('.carousel-button.right').addEventListener('click', () => {
    imageIndex = (imageIndex + 1) % totalImages; // Incrementar índice
    updateCarousel();
});

document.querySelector('.carousel-button.left').addEventListener('click', () => {
    imageIndex = (imageIndex - 1 + totalImages) % totalImages; // Decrementar índice
    updateCarousel();
});

// Eventos para los indicadores
indicators.forEach((indicator) => {
    indicator.addEventListener('click', (e) => {
        imageIndex = parseInt(e.target.dataset.index);
        updateCarousel();
    });
});

// Avanzar automáticamente cada 5 segundos
const startCarousel = () => {
    interval = setInterval(() => {
        imageIndex = (imageIndex + 1) % totalImages;
        updateCarousel();
    }, 2000);
};

// Pausar el carrusel al pasar el mouse
const carouselElement = document.querySelector('.carousel');
carouselElement.addEventListener('mouseenter', () => {
    clearInterval(interval); // Detener el intervalo
});

carouselElement.addEventListener('mouseleave', () => {
    startCarousel(); // Reiniciar el intervalo
});

// Iniciar el carrusel de imágenes
startCarousel();

// Carrusel de reseñas
let reviewIndex = 0; // Cambié el nombre para evitar conflictos
const reviewItems = document.querySelectorAll('.review-item');
const leftButton = document.querySelector('.review-button.left');
const rightButton = document.querySelector('.review-button.right');

// Función para mostrar la reseña en el índice dado
function showReview(index) {
    reviewItems.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active'); // Añadir clase 'active' al elemento actual
        }
    });

    // Actualizar la posición del carrusel de reseñas
    const offset = -index * 100; // Mueve la reseña actual al centro
    document.querySelector('.review-content').style.transform = `translateX(${offset}%)`;
}

// Función para ir a la siguiente revisión
function nextReview() {
    reviewIndex = (reviewIndex + 1) % reviewItems.length; // Siguiente comentario
    showReview(reviewIndex);
}

// Función para ir a la revisión anterior
function prevReview() {
    reviewIndex = (reviewIndex - 1 + reviewItems.length) % reviewItems.length; // Comentario anterior
    showReview(reviewIndex);
}

// Event listeners para los botones de navegación de reseñas
rightButton.addEventListener('click', nextReview);
leftButton.addEventListener('click', prevReview);

// Mostrar el primer comentario al cargar
showReview(reviewIndex);
// Obtener elementos del DOM
const localCalendarBtn = document.getElementById('local-calendar-btn');
const localCalendar = document.getElementById('local-calendar');
const localDatePicker = document.getElementById('local-date-picker');
const localDateSelected = document.getElementById('local-date-selected');

const destinationCalendarBtn = document.getElementById('destination-calendar-btn');
const destinationCalendar = document.getElementById('destination-calendar');
const destinationDatePicker = document.getElementById('destination-date-picker');
const destinationDateSelected = document.getElementById('destination-date-selected');

// Función para mostrar el calendario local
localCalendarBtn.addEventListener('click', () => {
    localCalendar.style.display = 'flex';
});

// Función para cerrar el calendario local
const closeLocalCalendar = () => {
    localCalendar.style.display = 'none';
    const selectedDate = localDatePicker.value;
    localDateSelected.innerText = selectedDate ? `Fecha seleccionada: ${selectedDate}` : '';
};

// Función para mostrar el calendario de destino
destinationCalendarBtn.addEventListener('click', () => {
    destinationCalendar.style.display = 'flex';
});

// Función para cerrar el calendario de destino
const closeDestinationCalendar = () => {
    destinationCalendar.style.display = 'none';
    const selectedDate = destinationDatePicker.value;
    destinationDateSelected.innerText = selectedDate ? `Fecha seleccionada: ${selectedDate}` : '';
};
// Establecer el año actual en el footer
document.getElementById('current-year').textContent = new Date().getFullYear();


