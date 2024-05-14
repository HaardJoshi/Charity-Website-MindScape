/* ###################################
----- CODE FOR RESPONSIVE PAGES -----
################################### */
// Function to check if the screen size is that of a mobile phone
function isMobileScreen() {
  return window.matchMedia("(max-width: 768px)").matches;
}

// Function to redirect to constructionPage.html
function redirectToConstructionPage() {
  window.location.href = "constructionPage.html";
}

// Check screen size on page load
window.addEventListener("load", function () {
  if (isMobileScreen()) {
    redirectToConstructionPage();
  }
});

// Check screen size on window resize
window.addEventListener("resize", function () {
  if (isMobileScreen()) {
    redirectToConstructionPage();
  }
});
/* ------ ##################################################
    Copyright 2024 Hard Joshi. Subject to the MIT license. 
################################################## ------ */
