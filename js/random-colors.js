const primaryColors = ['#51e2f5', '#9df9ef', '#edf756', '#ffa8B6'];

/**
 * Darkens a HEX color by a given percentage.
 * @param {string} hexColor - The color in HEX format (e.g., "#RRGGBB").
 * @param {number} percent - The percentage to darken by (0-100).
 * @returns {string} The darkened color in HEX format.
 */
function darkenHexColor(hexColor, percent) {
  // Remove '#' if present
  hexColor = hexColor.replace(/^#/, '');

  // Convert hex to RGB
  let r = parseInt(hexColor.substring(0, 2), 16);
  let g = parseInt(hexColor.substring(2, 4), 16);
  let b = parseInt(hexColor.substring(4, 6), 16);

  // Reduce each component by the given percentage
  const factor = 1 - percent / 100;
  r = Math.max(0, Math.floor(r * factor));
  g = Math.max(0, Math.floor(g * factor));
  b = Math.max(0, Math.floor(b * factor));

  // Convert back to HEX and pad with zeros if needed
  const rHex = r.toString(16).padStart(2, '0');
  const gHex = g.toString(16).padStart(2, '0');
  const bHex = b.toString(16).padStart(2, '0');

  return `#${rHex}${gHex}${bHex}`;
}

document.addEventListener('DOMContentLoaded', () => {
  // Select a random color
  const randomColor = primaryColors[Math.floor(Math.random() * primaryColors.length)];

  // Calculate the darker hover color (e.g., 20% darker)
  const hoverColor = darkenHexColor(randomColor, 20);

  // Set CSS custom properties on the root element
  document.documentElement.style.setProperty('--dynamic-primary-color', randomColor);
  document.documentElement.style.setProperty('--dynamic-primary-hover-color', hoverColor);

  // Contact form submission handler
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(event) {
      // Basic validation
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const subject = subjectInput ? subjectInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';
      
      let isValid = true;
      let errorMessages = [];

      if (name === '') {
        errorMessages.push('- Name is required.');
        isValid = false;
      }
      if (email === '') {
        errorMessages.push('- Email is required.');
        isValid = false;
      }
      if (subject === '') {
        errorMessages.push('- Subject is required.');
        isValid = false;
      }
      if (message === '') {
        errorMessages.push('- Message is required.');
        isValid = false;
      }

      // Basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (email !== '' && !emailPattern.test(email)) {
        errorMessages.push('- Please enter a valid email address.');
        isValid = false;
      }

      if (!isValid) {
        event.preventDefault(); // Prevent form submission
        alert('Please correct the following errors:\n' + errorMessages.join('\n'));
      }
      // If valid, the form will submit to Formspree via the HTML action attribute.
      // Formspree will handle the "Thank You" page or AJAX success message depending on its settings.
    });
  }
});
