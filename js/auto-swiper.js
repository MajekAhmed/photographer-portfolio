// Script to auto-load images from images/gallery/gallery.json into Swiper slider
fetch('images/gallery/gallery.json')
  .then(response => response.json())
  .then(images => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    if (!swiperWrapper) return;
    swiperWrapper.innerHTML = '';
    images.forEach((img, i) => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `<img src="images/gallery/${img}" alt="صورة ${i+1}">`;
      swiperWrapper.appendChild(slide);
    });
    if (window.Swiper) {
      new Swiper('.mySwiper', {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        speed: 800,
      });
    }
  });
