const VIEWPORT_HEIGHT = window.innerHeight;
console.log(VIEWPORT_HEIGHT);

const ABOUT_ME_SECTION = document.getElementById("about-me");
const HEADER = document.getElementById("header-contacts-menu");
const FOOTER = document.getElementById("footer");
console.log(ABOUT_ME_SECTION.offsetHeight);
console.log(HEADER.offsetHeight);
console.log(FOOTER.offsetHeight);

const NEW_ABOUT_ME_SECTION_HEIGHT = VIEWPORT_HEIGHT - (HEADER.offsetHeight + FOOTER.offsetHeight);
console.log("NEW_ABOUT_ME_SECTION_HEIGHT = " + NEW_ABOUT_ME_SECTION_HEIGHT);

ABOUT_ME_SECTION.style.height = NEW_ABOUT_ME_SECTION_HEIGHT + "px";