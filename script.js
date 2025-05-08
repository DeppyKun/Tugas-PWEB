const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  function toggleMenu() {
    const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      mobileMenu.setAttribute('aria-hidden', !isOpen);
      // Toggle tabindex for accessibility
      mobileMenu.querySelectorAll('a').forEach(link => {
        link.tabIndex = isOpen ? 0 : -1;
      });
    }

    hamburger.addEventListener('click', toggleMenu);

    // Optional: close menu when clicking outside or on menu links
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        if(mobileMenu.classList.contains('open')) {
          toggleMenu();
        }
      });
    });

    // Close menu on ESC key press
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        toggleMenu();
      }
    });

$(document).ready(function() {
    $('form').on('submit', function(e) {
        let isValid = true;
        $('.error').remove();

        const name = $('input[name="nama"]').val().trim();
        if (name === '') {
            $('input[name="nama"]').after('<span class="error" style="color:red">Nama wajib diisi</span>');
            isValid = false;
        } else if (name.split(' ').length > 30) {
            $('input[name="nama"]').after('<span class="error" style="color:red">Maksimal 30 kata</span>');
            isValid = false;
        }

        const email = $('input[name="email"]').val().trim();
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (email === '') {
            $('input[name="email"]').after('<span class="error" style="color:red">Email wajib diisi</span>');
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $('input[name="email"]').after('<span class="error" style="color:red">Format email tidak valid</span>');
            isValid = false;
        }

        const phone = $('input[name="phone"]').val().trim();
        const phonePattern = /^[0-9]{10,15}$/;
        if (phone === '') {
            $('input[name="phone"]').after('<span class="error" style="color:red">Nomor HP wajib diisi</span>');
            isValid = false;
        } else if (!phonePattern.test(phone)) {
            $('input[name="phone"]').after('<span class="error" style="color:red">Nomor HP harus angka 10-15 digit</span>');
            isValid = false;
        }

        const message = $('textarea[name="pesan"]').val().trim();
        const messageWords = message.split(/\s+/);
        if (message === '') {
            $('textarea[name="pesan"]').after('<span class="error" style="color:red">Pesan wajib diisi</span>');
            isValid = false;
        } else if (messageWords.length > 100) {
            $('textarea[name="pesan"]').after('<span class="error" style="color:red">Pesan maksimal 100 kata</span>');
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
        }
    });
});
