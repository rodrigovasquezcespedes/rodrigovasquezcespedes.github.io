document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('check');
    const menu = document.getElementById('menu');
    const mainContent = document.getElementById('main-content');
  
    mainContent.addEventListener('click', function(event) {
        menuToggle.checked = false;
    });

  });