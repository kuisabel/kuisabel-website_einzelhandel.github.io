const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const iconAccount = document.querySelector(".icon-account");
const hamburgerIcon = document.querySelector(".icon-hamburger");
const closingIcon = document.querySelector(".icon-close");

if (!primaryNav.hasAttribute("data-visible")) {
  hamburgerIcon.style.display = "block";
  closingIcon.style.display = "none";
  iconAccount.style.display = "none";
} else {
  hamburgerIcon.style.display = "none";
  closingIcon.style.display = "block";
  iconAccount.style.display = "block";
}

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");

  if (primaryNav.hasAttribute("data-visible")) {
    hamburgerIcon.style.display = "none";
    closingIcon.style.display = "block";
    iconAccount.style.display = "block";
  } else {
    hamburgerIcon.style.display = "block";
    closingIcon.style.display = "none";
    iconAccount.style.display = "none";
  }
});

// scrolling header//

const navList = document.querySelector(".primary-navigation");
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0 && window.matchMedia("(min-width: 55em)").matches) {
    body.classList.remove("scroll-up");
  }

  if (
    currentScroll > lastScroll &&
    !body.classList.contains("scroll-down") &&
    window.matchMedia("(min-width: 55em)").matches
  ) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }

  if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down") &&
    window.matchMedia("(min-width: 55em)").matches
  ) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }

  lastScroll = currentScroll;
});
