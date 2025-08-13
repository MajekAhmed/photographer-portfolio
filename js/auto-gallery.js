// Script to auto-load images from images/gallery folder and render them in the gallery
// This requires the images to be listed in a JSON file or similar, since JS in browser cannot read directories directly.

fetch('images/gallery/gallery.json')
  .then(response => response.json())
  .then(images => {
    const grid = document.getElementById('masonry-grid');
    grid.innerHTML = '';
    images.forEach((img, i) => {
      const div = document.createElement('div');
      div.className = 'grid-item';
      div.innerHTML = `<a href="images/gallery/${img}" class="glightbox"><img src="images/gallery/${img}" alt="عمل ${i+1}"></a>`;
      grid.appendChild(div);
    });
    if (window.GLightbox) GLightbox({ selector: '.glightbox' });
  });
