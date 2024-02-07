document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
  
    // Add event listener to each nav link
    navLinks.forEach(function(navLink) {
      navLink.addEventListener("click", function() {
        // Remove active class from all nav links
        navLinks.forEach(function(link) {
          link.classList.remove("active");
        });
  
        // Add active class to the clicked nav link
        this.classList.add("active");
  
        // Store the clicked menu item in localStorage
        localStorage.setItem("activeMenuItem", this.getAttribute("href"));
      });
    });
  
    // Check if there's a stored active menu item and apply active class
    const storedActiveMenuItem = localStorage.getItem("activeMenuItem");
    if (storedActiveMenuItem) {
      const activeMenuItem = document.querySelector(`.nav-link[href="${storedActiveMenuItem}"]`);
      if (activeMenuItem) {
        activeMenuItem.classList.add("active");
      }
    }
  });
  
  