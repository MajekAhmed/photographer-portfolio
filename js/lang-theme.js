// دعم التبديل بين العربية والإنجليزية + الدارك مود

document.addEventListener('DOMContentLoaded', function() {
  // تحميل بيانات اللغات
  var lang = localStorage.getItem('site-lang') || 'ar';
  var dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;

  // دالة لتغيير النصوص
  function updateLangTexts() {
    if (!window.siteLangData) return;
    var t = window.siteLangData[lang];
    // Navbar
    var navs = document.querySelectorAll('.navbar-nav .nav-link');
    if(navs.length >= 4) {
      navs[0].textContent = t.nav_home;
      navs[1].textContent = t.nav_about;
      navs[2].textContent = t.nav_gallery;
      navs[3].textContent = t.nav_contact;
    }
    // Brand
    var brand = document.querySelector('[data-i18n-brand]');
    if(brand) brand.textContent = t.brand;
    // Hero
    var heroTitle = document.querySelector('.hero h1, header h1');
    if(heroTitle) heroTitle.textContent = t.hero_title;
    var heroDesc = document.querySelector('.hero p, header p');
    if(heroDesc) heroDesc.textContent = t.hero_desc;
    // About
    var aboutTitle = document.querySelector('h1.fw-bold, h2.fw-bold');
    if(aboutTitle && aboutTitle.textContent.trim().length < 20) aboutTitle.textContent = t.about_title;
    var aboutDesc = document.querySelector('section p');
    if(aboutDesc && aboutDesc.textContent.indexOf('مصور') !== -1 || aboutDesc.textContent.indexOf('photographer') !== -1) aboutDesc.textContent = t.about_desc;
    // Gallery
    var galleryTitle = document.querySelector('h1.fw-bold, h2.fw-bold');
    if(galleryTitle && galleryTitle.textContent.indexOf('معرض') !== -1 || galleryTitle.textContent.indexOf('Gallery') !== -1) galleryTitle.textContent = t.gallery_title;
    var galleryDesc = document.querySelector('header p.lead');
    if(galleryDesc) galleryDesc.textContent = t.gallery_desc;
    // CTA Button
    var ctaBtn = document.querySelector('[data-i18n-cta]');
    if(ctaBtn) ctaBtn.textContent = t.cta;
    // Contact
    var contactTitle = document.querySelector('h2.fw-bold, h1.fw-bold');
    if(contactTitle && contactTitle.textContent.indexOf('تواصل') !== -1 || contactTitle.textContent.indexOf('Contact') !== -1) contactTitle.textContent = t.contact_title;
    var form = document.querySelector('form');
    if(form) {
      var labels = form.querySelectorAll('label, .input-group-text');
      if(labels.length >= 3) {
        labels[0].textContent = t.contact_name;
        labels[1].textContent = t.contact_email;
        labels[2].textContent = t.contact_message;
      }
      var btn = form.querySelector('button[type="submit"]');
      if(btn) btn.innerHTML = '<i class="fa fa-paper-plane me-2"></i>' + t.contact_btn;
    }
    var follow = document.querySelector('.text-center h5, .text-center .mb-3');
    if(follow) follow.textContent = t.contact_follow;
    // Footer
    var footer = document.querySelector('footer, .footer');
    if(footer) footer.textContent = t.footer;
    // أزرار اللغة والوضع
    var langBtn = document.getElementById('lang-toggle');
    if(langBtn) langBtn.innerHTML = t.lang_btn;
    var darkBtn = document.getElementById('dark-toggle');
    if(darkBtn) darkBtn.innerHTML = document.body.classList.contains('dark-mode') ? t.light_btn : t.dark_btn;
  }

  // تبديل اللغة
  var langBtn = document.getElementById('lang-toggle');
  if(langBtn) {
    langBtn.addEventListener('click', function() {
      lang = lang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('site-lang', lang);
      location.reload();
    });
  }

  // تفعيل الدارك مود
  var dark = localStorage.getItem('site-dark') === '1';
  if(dark) document.body.classList.add('dark-mode');
  var darkBtn = document.getElementById('dark-toggle');
  if(darkBtn) {
    darkBtn.addEventListener('click', function() {
      dark = !dark;
      localStorage.setItem('site-dark', dark ? '1' : '0');
      document.body.classList.toggle('dark-mode', dark);
      updateLangTexts();
    });
  }

  // تطبيق النصوص
  setTimeout(updateLangTexts, 100);
});
