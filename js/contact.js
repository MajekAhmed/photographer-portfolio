// تحسين تفاعل الفورم وإضافة ترنزكشنات جمالية

document.addEventListener('DOMContentLoaded', function() {
  // تأثير عند التركيز على الحقول
  document.querySelectorAll('.form-control').forEach(function(input) {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focus');
    });
    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focus');
    });
  });

  // تفعيل زر الإرسال مع انيميشن
  var form = document.querySelector('form');
  if(form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.innerHTML = '<i class="fa fa-spinner fa-spin me-2"></i>جاري الإرسال...';
      setTimeout(function() {
        btn.innerHTML = '<i class="fa fa-check me-2"></i>تم الإرسال بنجاح!';
        btn.classList.add('btn-success');
        setTimeout(function() {
          btn.disabled = false;
          btn.classList.remove('btn-success');
          btn.innerHTML = '<i class="fa fa-paper-plane me-2"></i>إرسال';
          form.reset();
        }, 2000);
      }, 1500);
    });
  }

  // انيميشن ظهور عناصر السوشيال
  var socials = document.querySelectorAll('.btn-social');
  socials.forEach(function(btn, i) {
    btn.style.opacity = '0';
    btn.style.transform = 'translateY(20px)';
    setTimeout(function() {
      btn.style.transition = 'all 0.5s cubic-bezier(.68,-0.55,.27,1.55)';
      btn.style.opacity = '1';
      btn.style.transform = 'translateY(0)';
    }, 400 + i * 120);
  });
});
