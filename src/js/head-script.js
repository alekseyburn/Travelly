document.querySelector('html').classList.remove('no-js');
if (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)) {
  document.querySelector('html').classList.remove('webp');
  document.querySelector('html').classList.add('no-webp');
}
