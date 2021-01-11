const VIEWPORT_HEIGHT = window.innerHeight;

const PROJECTS_SECTION = document.getElementById("projects");
const HEADER = document.getElementById("header-contacts-menu");
const FOOTER = document.getElementById("footer");

const NEW_PROJECTS_SECTION_HEIGHT = VIEWPORT_HEIGHT - (HEADER.offsetHeight + FOOTER.offsetHeight);
PROJECTS_SECTION.style.height = NEW_PROJECTS_SECTION_HEIGHT + "px";


const FIRST_PROJECT = document.getElementById("first-project-card");
const FIRST_PROJECT_INFO = document.getElementById("first-project-more-info");
const CLOSE_PROJECT_ICON = document.getElementById("closing-icon");

function toggleProjectInfo(){
    FIRST_PROJECT.addEventListener("click", function(){
        FIRST_PROJECT_INFO.style.display = 'block';
    });
    CLOSE_PROJECT_ICON.addEventListener("click", function(e){
        FIRST_PROJECT_INFO.style.display = 'none';
        
        e.stopPropagation();
    });
}