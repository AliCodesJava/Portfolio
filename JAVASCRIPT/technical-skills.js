const VIEWPORT_HEIGHT = window.innerHeight;

const TECHNICAL_SKILLS_SECTION = document.getElementById("technical-skills");
const HEADER = document.getElementById("header-contacts-menu");
const FOOTER = document.getElementById("footer");

const NEW_TECHNICAL_SKILLS_SECTION_HEIGHT = VIEWPORT_HEIGHT - (HEADER.offsetHeight + FOOTER.offsetHeight + 40);
TECHNICAL_SKILLS_SECTION.style.height = NEW_TECHNICAL_SKILLS_SECTION_HEIGHT + "px";