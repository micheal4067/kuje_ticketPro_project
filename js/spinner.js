 document.addEventListener('DOMContentLoaded', () => {
   
    const loader = document.getElementById('global-loader');
    if (loader) {
      loader.innerHTML = `
        <div class="spinner-wrapper">
          <div class="spinner"></div>
          <div class="spinner-icon-bg">
            <img src="./images/loading-icon.png" alt="Loading Icon" class="spinner-icon">
          </div>
        </div>`;
    }
  });

  // Hide loader after page is fully loaded
  window.addEventListener('load', () => {
    const loader = document.getElementById('global-loader');
    if (loader) {
      loader.classList.add('hidden');
    }
  });