const mobileMenuBtn = document.getElementById("mobile-menu")
const navMenu = document.querySelector(".nav-menu")
const cta = document.querySelector(".cta")

// Event Listeners

// Mobile Nav
mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("toggle")
})

// CTA
cta.addEventListener("click", () => {
  window.scroll(0, window.innerHeight)
})
