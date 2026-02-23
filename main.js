(function(){
  // Mobile nav toggle
  const burger = document.querySelector('[data-burger]');
  const links = document.querySelector('[data-navlinks]');
  if(burger && links){
    burger.addEventListener('click', () => links.classList.toggle('open'));
  }

  // Active nav link based on current file
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('a[data-nav]').forEach(a=>{
    const href = (a.getAttribute('href') || '').toLowerCase();
    if(href === path) a.classList.add('active');
  });

  // Current year in footer
  const y = document.querySelector('[data-year]');
  if(y) y.textContent = new Date().getFullYear();
})();