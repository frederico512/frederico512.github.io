// Keep JavaScript small and use it only for progressive enhancements.
// The website's main content and navigation work without JavaScript.

const currentYear = document.querySelector("[data-current-year]");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
