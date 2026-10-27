(() => {
  const backToTop = document.getElementById('backToTop');
  const toast = document.getElementById('toast');
  let toastTimer;

  // Logika Navbar Glassmorphism saat discroll
  const siteHeader = document.getElementById('site-header');
  if (siteHeader) {
    const handleScroll = () => {
      // Jika di-scroll lebih dari 50px, tambahkan class 'scrolled'
      if (window.scrollY > 50) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Cek posisi scroll saat halaman pertama kali dibuka
  }

  // Reveal elements on scroll
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach(item => revealObserver.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('revealed'));
  }

  // Back to top button
  if (backToTop) {
    function updateBackToTop() {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    }
    window.addEventListener('scroll', updateBackToTop, { passive: true });
    updateBackToTop();
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Toast notification
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 3600);
  }

  // Form listeners
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      showToast('Terima kasih! Pesan Anda telah terkirim.');
      event.currentTarget.reset();
    });
  }

  // Slider Otomatis Hero Background
  const bgSlides = document.querySelectorAll('.hero-bg-slider img');
  if (bgSlides.length > 0) {
    let currentSlide = 0;
    
    setInterval(() => {
      bgSlides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % bgSlides.length;
      bgSlides[currentSlide].classList.add('active');
    }, 5000); // 5 detik
  }

  // Logika Slider Siswa (Swipe Effect)
  const studentTrack = document.querySelector('.student-track');
  const studentSlides = document.querySelectorAll('.student-slide');
  
  if (studentTrack && studentSlides.length > 0) {
    let currentIndex = 0;
    const totalSlides = studentSlides.length;

    setInterval(() => {
      currentIndex++;
      
      // Jika sudah mencapai slide terakhir, kembalikan ke awal
      if (currentIndex >= totalSlides) {
        currentIndex = 0;
      }
      
      // Geser track ke kiri sesuai index (0%, -100%, -200%, dst)
      studentTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
      
    }, 4500); // Berganti setiap 4.5 detik
  }
})();