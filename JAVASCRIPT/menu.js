const VIEWPORT_WIDTH = window.innerWidth;

const MENU_ICON = document.getElementById("pages-nav");
const MENU = document.getElementById("menu");

function toggleMenu(){
    if(VIEWPORT_WIDTH <= 992){
        MENU_ICON.addEventListener("click", function(){
            MENU.style.display = 'block';
        });
        MENU.addEventListener("click", function(e){
            MENU.style.display = 'none';
            
            e.stopPropagation();
        });

        return;
    }

    MENU.style.display = 'block'; /* I shouldn't need this ?! */
}