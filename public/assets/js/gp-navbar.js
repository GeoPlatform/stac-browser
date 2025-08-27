// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
  const navbarCollapse = document.getElementById('navbarCollapse');
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCloseBtn = document.getElementById('navbarCloseBtn');

  // If any of the required elements are not found, exit gracefully.
  if (!navbarCollapse || !navbarToggler || !navbarCloseBtn) {
    return;
  }

  // --- Resize Handler ---
  // Function to close the navbar if the screen size is larger than the collapse breakpoint
  function handleResize() {
    // Check if the screen size is larger than Bootstrap's lg breakpoint (992px)
    if (window.innerWidth >= 992 && navbarCollapse.classList.contains('show')) {
      const collapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      collapse.hide();
      navbarToggler.setAttribute('aria-expanded', 'false');
    }
  }
  // Add an event listener for window resize
  window.addEventListener('resize', handleResize);

  // --- Collapse/Close Handler ---
  const collapseInstance = new bootstrap.Collapse(navbarCollapse, {
    toggle: false, // Don't toggle the collapse on initialization
  });

  // When the collapse starts to show, ensure it's visible and not flickering
  navbarCollapse.addEventListener('show.bs.collapse', function () {
    navbarCollapse.classList.remove('collapsing', 'd-none');
  });

  // When the collapse is finished hiding, ensure it's marked as 'd-none' to prevent layout issues
  navbarCollapse.addEventListener('hidden.bs.collapse', function () {
    navbarCollapse.classList.add('d-none');
  });

  // Handle the close button functionality
  navbarCloseBtn.addEventListener('click', () => collapseInstance.hide());
});