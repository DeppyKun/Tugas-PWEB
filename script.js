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