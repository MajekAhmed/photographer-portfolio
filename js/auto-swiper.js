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
      const image = document.createElement('img');
      image.src = `images/gallery/${img}`;
      image.alt = `صورة ${i+1}`;
      image.loading = 'eager';
      image.style.opacity = '0';
      image.onload = () => { image.style.transition = 'opacity 0.5s'; image.style.opacity = '1'; };
      slide.appendChild(image);
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
