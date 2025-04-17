// Image gallery functionality
const thumbnails = document.querySelectorAll('.thumbnails img');
const mainImage = document.querySelector('.main-image img');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        mainImage.src = thumb.src.replace('-thumb', '-large');
    });
});