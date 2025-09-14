function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  const content = document.querySelector('.content');


  sidebar.classList.toggle('active');
  content.classList.toggle('blur');
  

  if (sidebar.classList.contains('active')) {
    document.addEventListener('click', handleOutsideClick);
  } else {
    document.removeEventListener('click', handleOutsideClick);
  }
}

function handleOutsideClick(event) {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.querySelector('.menu-toggle');
  const content = document.querySelector('.content');

  if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
    sidebar.classList.remove('active');
    content.classList.remove('blur');
    document.removeEventListener('click', handleOutsideClick);
  }
}

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({ top: target.offsetTop - 20, behavior: 'smooth' });
        if (window.innerWidth <= 768) toggleMenu();
      }
    });
  });

document.getElementById('searchBox').addEventListener('input', function () {
  const term = this.value.toLowerCase();
  const links = document.querySelectorAll('#docLinks a');
  let matchFound = false;

  links.forEach(link => {
    const text = link.textContent.toLowerCase();
    const match = text.includes(term);
    link.style.display = match ? 'block' : 'none';
    if (match) matchFound = true;
  });

  document.getElementById('noResults').style.display = matchFound ? 'none' : 'block';
});



  function togglePlay(container) {
  const video = container.querySelector('video');
  const icon = container.querySelector('.custom-toggle-btn i');

  if (video.paused) {
    video.play();
    container.classList.add('playing');
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } else {
    video.pause();
    container.classList.remove('playing');
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('tutorialVideo');
  const container = document.querySelector('.video-container');
  const icon = container.querySelector('.custom-toggle-btn i');

  video.addEventListener('ended', () => {
    container.classList.remove('playing');
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  });
});

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const triggerBottom = window.innerHeight * 0.90;

    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < triggerBottom) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  document.addEventListener("DOMContentLoaded", () => {
  const hasSeen = localStorage.getItem('didYouKnowSeen');
  const popup = document.getElementById('didYouKnowPopup');
  const overlay = document.getElementById('didYouKnowOverlay');
  const icon = document.getElementById('didYouKnowIcon');

  if (!hasSeen) {
    popup.style.display = 'block';
    overlay.style.display = 'block';
  } else {
    icon.style.display = 'flex';
  }
});

function dismissDidYouKnow() {
  localStorage.setItem('didYouKnowSeen', 'true');
  document.getElementById('didYouKnowPopup').style.display = 'none';
  document.getElementById('didYouKnowOverlay').style.display = 'none';
  document.getElementById('didYouKnowIcon').style.display = 'flex';
}

function reopenDidYouKnow() {
  document.getElementById('didYouKnowPopup').style.display = 'block';
  document.getElementById('didYouKnowOverlay').style.display = 'block';
}

  const items = document.querySelectorAll('.accordion-header');

  items.forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const icon = header.querySelector('.accordion-icon');

      const isOpen = body.style.maxHeight;

      document.querySelectorAll('.accordion-body').forEach(b => b.style.maxHeight = null);
      document.querySelectorAll('.accordion-icon').forEach(i => i.textContent = '+');

      if (!isOpen) {
        body.style.maxHeight = body.scrollHeight + 'px';
        icon.textContent = '−';
      }
    });
  });

  const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        applyTheme(savedTheme);
      } else {
        applyTheme('auto');
      }

      function openAppearanceModal() {
        document.getElementById('appearanceModal').style.display = 'block';
      }

      function closeAppearanceModal() {
        document.getElementById('appearanceModal').style.display = 'none';
      }

      function setTheme(theme) {
        localStorage.setItem('theme', theme);
        applyTheme(theme);
        closeAppearanceModal();
      }

      function applyTheme(theme) {
        if (theme === 'dark') {
          document.documentElement.setAttribute('data-theme', 'dark');
        } else if (theme === 'light') {
          document.documentElement.setAttribute('data-theme', 'light');
        } else {
          const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        }
      }

      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'auto') {
          applyTheme('auto');
        }
      });

       let currentSlide = 0;
  let sliderInterval = setInterval(nextSlide, 5000);

  function showSlide(index) {
    const wrapper = document.getElementById("sliderWrapper");
    const totalSlides = wrapper.children.length;
    currentSlide = (index + totalSlides) % totalSlides;
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function pauseSlider() {
    clearInterval(sliderInterval);
  }

  function resumeSlider() {
    sliderInterval = setInterval(nextSlide, 5000);
  }

   document.getElementById("year").textContent = new Date().getFullYear();
