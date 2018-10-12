const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = .6;

imgs[0].style.opacity = opacity;

// 1ST EVENTLISTENER METHOD ----------
// imgs.forEach(img => img.addEventListener('click', e => (current.src = e.target.src)));

// 2ND EVENTLISTENER METHOD ----------
imgs.forEach(img => img.addEventListener('click', imgClick));

// CLICK FUNCTION ----------
function imgClick(e) {
  // RESET OPACITY ----------
  imgs.forEach(img => (img.style.opacity = 1));
  // CHANGE CURRENT IMAGE
  current.src = e.target.src;
  // ADD FADE IN ----------
  current.classList.add('fade-in');
  setTimeout(() => current.classList.remove('fade-in'), 500);
  // SET OPACITY ----------
  e.target.style.opacity = opacity;
};