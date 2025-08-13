// Initialize Swiper (Slider)
var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 800,
});

// Initialize GLightbox for gallery images
var lightbox = GLightbox({
  selector: '.glightbox',
  loop: true,
  zoomable: true,
  touchNavigation: true,
  openEffect: 'zoom',
  closeEffect: 'fade',
  slideEffect: 'slide',
});