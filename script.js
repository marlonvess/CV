document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const pages = document.querySelectorAll('.tab-content');
  
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const target = button.getAttribute('data-tab');
  
        pages.forEach(page => {
          page.style.display = page.id === target ? 'block' : 'none';
        });
  
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      });
    });
  });
  