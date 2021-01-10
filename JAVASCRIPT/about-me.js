const VIEWPORT_HEIGHT = window.innerHeight;

const ABOUT_ME_SECTION = document.getElementById("about-me");
const HEADER = document.getElementById("header-contacts-menu");
const FOOTER = document.getElementById("footer");

const NEW_ABOUT_ME_SECTION_HEIGHT = VIEWPORT_HEIGHT - (HEADER.offsetHeight + FOOTER.offsetHeight);
ABOUT_ME_SECTION.style.height = NEW_ABOUT_ME_SECTION_HEIGHT + "px";