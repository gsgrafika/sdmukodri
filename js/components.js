document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initComponentEvents();
});

// 1. Render Header
function renderHeader() {
  const headerContainer = document.getElementById('site-header');
  if (!headerContainer) return;

  // Dapatkan nama file halaman saat ini untuk menentukan link aktif
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  headerContainer.innerHTML = `
    <div class="container nav-container">
      <nav class="navbar" aria-label="Navigasi utama">
        <!-- Brand -->
        <a class="brand" href="index.html" aria-label="SD Muhammadiyah Kota Kediri, beranda">
          <span class="brand-mark">
            <img src="assets/images/logo.png" alt="Logo SD Muhammadiyah" />
          </span>
          <span class="brand-copy">
            <span class="brand-name">SD MUHAMMADIYAH</span>
            <span class="brand-sub">Kota Kediri</span>
          </span>
        </a>

        <!-- Nav Links -->
        <div class="nav-links" id="navLinks">
          <a href="index.html" class="${currentPath === 'index.html' || currentPath === '' ? 'active' : ''}">Beranda</a>
          
          <!-- Dropdown Profil -->
          <div class="nav-item-dropdown">
            <a href="profil.html" class="nav-link ${currentPath === 'profil.html' ? 'active' : ''}">
              Profil <svg class="dropdown-icon" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div class="dropdown-menu">
              <a href="profil.html#visi-misi">Visi & Misi</a>
              <a href="profil.html#sejarah">Sejarah</a>
              <a href="profil.html#sambutan">Sambutan Kepala Sekolah</a>
            </div>
          </div>

          <!-- Dropdown Akademik -->
          <div class="nav-item-dropdown">
            <a href="akademik.html" class="nav-link ${currentPath === 'akademik.html' ? 'active' : ''}">
              Akademik <svg class="dropdown-icon" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div class="dropdown-menu">
              <a href="akademik.html#kurikulum">Kurikulum</a>
              <a href="akademik.html#ekstrakurikuler">Ekstrakurikuler</a>
              <a href="akademik.html#program-unggulan">Program Unggulan</a>
            </div>
          </div>

          <a href="fasilitas.html" class="${currentPath === 'fasilitas.html' ? 'active' : ''}">Fasilitas</a>

          <!-- Dropdown Artikel -->
          <div class="nav-item-dropdown">
            <a href="artikel.html" class="nav-link ${currentPath === 'artikel.html' ? 'active' : ''}">
              Artikel <svg class="dropdown-icon" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </a>
            <div class="dropdown-menu">
              <a href="artikel.html#berita">Berita</a>
              <a href="artikel.html#pengumuman">Pengumuman</a>
              <a href="artikel.html#artikel">Artikel</a>
            </div>
          </div>

          <a href="kontak.html" class="${currentPath === 'kontak.html' ? 'active' : ''}">Kontak</a>

        </div>

        <!-- Nav Actions (Kanan) -->
        <div class="nav-actions">
          <button class="theme-toggle" aria-label="Ubah tema" type="button">
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
          </button>
          <div class="nav-divider"></div>
          <a class="nav-login" href="ppdb.html">Info PPDB</a>
          <a class="btn btn-primary" href="daftar.html">Daftar 
            <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14m-6-6 6 6-6 6"/>
            </svg>
          </a>
          <button class="menu-toggle" id="menuToggle" type="button" aria-label="Buka menu navigasi" aria-expanded="false" aria-controls="navLinks">
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <line class="line-top" x1="4" y1="7" x2="20" y2="7" />
              <line class="line-mid" x1="4" y1="12" x2="20" y2="12" />
              <line class="line-bot" x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  `;
}

// 2. Render Footer
function renderFooter() {
  const footerContainer = document.getElementById('site-footer');
  if (!footerContainer) return;

  const year = new Date().getFullYear();

  footerContainer.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="brand" href="index.html">
            <span class="brand-mark">
            <img src="assets/images/logo.png" alt="Logo SD Muhammadiyah" />
            </span>
            <span class="brand-copy"><span class="brand-name">SD MUHAMMADIYAH</span><span class="brand-sub">Kota Kediri</span></span>
          </a>
          <p>Menjadi ruang tumbuh untuk generasi yang berilmu, berakhlak, dan siap menghadapi masa depan.</p>
          <div class="social-links" aria-label="Media sosial">
            <!-- Ikon Instagram -->
            <a href="kontak.html" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <!-- Ikon Facebook -->
            <a href="kontak.html" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <!-- Ikon YouTube -->
            <a href="kontak.html" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
            </a>
            <!-- Ikon WhatsApp -->
            <a href="kontak.html" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Jelajahi</h4>
          <div class="footer-links">
            <a href="index.html">Beranda</a>
            <a href="profil.html">Profil Sekolah</a>
            <a href="akademik.html">Akademik</a>
            <a href="fasilitas.html">Fasilitas</a>
            <a href="artikel.html">Artikel</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Informasi</h4>
          <div class="footer-links">
            <a href="kontak.html">Penerimaan Siswa Baru</a>
            <a href="kontak.html">Kalender Akademik</a>
            <a href="kontak.html">Pertanyaan Umum</a>
            <a href="kontak.html">Hubungi Kami</a>
          </div>
        </div>
        <div class="footer-col newsletter">
          <h4>Kabar Sekolah</h4>
          <p>Dapatkan informasi terbaru dari sekolah.</p>
          <form class="newsletter-form" id="newsletterForm">
            <input type="email" aria-label="Email untuk berlangganan" placeholder="Alamat email Anda" required />
            <button type="submit" aria-label="Daftar berlangganan">
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
              </svg>
            </button>
          </form>
          <!-- Tambahan Alamat & Maps -->
          <div class="footer-address">
            <p>Jl. Kilisuci No.lV/34, Singonegaran, Kec. Pesantren, Kota Kediri, Jawa Timur 64132</p>
            <a href="https://maps.app.goo.gl/8eLB9uueZxbu7P1r8" target="_blank" rel="noopener noreferrer" class="map-link">Kunjungi Google Maps</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${year} SD Muhammadiyah Kota Kediri. Hak cipta dilindungi.</span>
        <div class="footer-bottom-links">
          <a href="kontak.html">Kebijakan Privasi</a>
          <a href="kontak.html">Syarat dan Ketentuan</a>
        </div>
      </div>
    </div>
  `;
}

// 3. Event Listener untuk Toggle Menu Mobile
function initComponentEvents() {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (!menuToggle || !navLinks) return;

  function closeMenu() {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });

    // Logika Dropdown di Mobile
  const dropdownParents = document.querySelectorAll('.nav-item-dropdown > .nav-link');
  dropdownParents.forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 940) {
        e.preventDefault(); // Cegah pindah halaman saat klik parent
        const parent = link.parentElement;
        parent.classList.toggle('active');
      }
    });
  });

  // Perbaikan Bug: Jangan tutup menu jika yang diklik adalah parent dropdown di mobile
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (window.innerWidth <= 940 && link.classList.contains('nav-link') && link.parentElement.classList.contains('nav-item-dropdown')) {
        return; // Hentikan eksekusi, biarkan menu dropdown terbuka
      }
      closeMenu();
    });
  });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 940) closeMenu(); });
}