// Initialize animations and mobile nav
window.addEventListener('DOMContentLoaded', () => {
  if (window.AOS) AOS.init();
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
