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
      const a = document.createElement('a');
      a.href = `images/gallery/${img}`;
      a.className = 'glightbox';
      const image = document.createElement('img');
      image.src = `images/gallery/${img}`;
      image.alt = `عمل ${i+1}`;
      image.loading = 'eager';
      image.style.opacity = '0';
      image.onload = () => { image.style.transition = 'opacity 0.5s'; image.style.opacity = '1'; };
      a.appendChild(image);
      div.appendChild(a);
      grid.appendChild(div);
    });
    if (window.GLightbox) GLightbox({ selector: '.glightbox' });
  });
