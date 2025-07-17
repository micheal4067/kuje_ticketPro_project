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


  /*const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');*/

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

  // Show or hide the "noResults" message
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

// Reset icon to play when video ends
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